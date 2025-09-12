import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logoutAction } from './Actions';
import store from './store';

// ایجاد نمونه سفارشی از axios
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // آدرس پایه API شما
  timeout: 10000, // زمان انتظار برای درخواست (میلiseconds)
});

// 🔍 Interceptor برای درخواست‌ها (افزودن هدر Authorization)
apiClient.interceptors.request.use(
  (config) => {
    // ۱. دریافت توکن از localStorage/sessionStorage
    const token = localStorage.getItem('token');
    
    // ۲. اگر توکن وجود داشت، آن را به هدر Authorization اضافه کنید
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config; // بازگرداندن پیکربندی به‌روزرسانی‌شده
  },
  (error) => {
    return Promise.reject(error); // بازگرداندن خطا در صورت شکست
  }
);

// ⚠️ Interceptor برای پاسخ‌ها (مدیریت خطاهای ۴۰۱)
apiClient.interceptors.response.use(
  (response) => response, // پاسخ موفق را بدون تغییر بازگردان
  (error) => {
    // اگر کد وضعیت خطا ۴۰۱ باشد (توکن منقضی شده یا نامعتبر)
    if (error.response && error.response.status === 401) {
      store.dispatch(logoutAction()); // dispatch کردن action
    }
    return Promise.reject(error); // بازگرداندن خطا به کامپوننت‌ها
  }
);

export default apiClient; // صادرات نمونه apiClient برای استفاده در پروژه