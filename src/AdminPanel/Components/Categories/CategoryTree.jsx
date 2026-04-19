import React, { useState } from 'react';
// کامپوننت بازگشتی برای نمایش دسته‌بندی‌های درختی
const CategoryTree = ({ categories, onCategorySelect }) => {
    const [expanded, setExpanded] = useState(new Set()); // مجموعه‌ای از idهایی که باید باز شوند
    // تابع برای تغییر وضعیت باز/بسته شدن دسته‌بندی
    const toggleExpand = (id) => {
        const newExpanded = new Set(expanded);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpanded(newExpanded);
    };
    // تابع بازگشتی برای رندر کردن دسته‌بندی‌ها
    const renderCategory = (category) => {
        const isExpanded = expanded.has(category.id);
        const hasChildren = category.children && category.children.length > 0;
        return (
            <li key={category.id} className="category-item">
                <div className="category-header" onClick={() => toggleExpand(category.id)}>
                    <span className="category-name">{category.name}</span>
                    {hasChildren && (
                        <span className={`toggle-icon ${isExpanded ? 'up' : 'down'}`}>
                            {isExpanded ? '▲' : '▼'}
                        </span>
                    )}
                </div>
                {/* نمایش زیردسته‌ها اگر باز شده باشند */}
                {hasChildren && isExpanded && (
                    <ul className="category-children">
                        {category.children.map((child) => renderCategory(child))}
                    </ul>
                )}
            </li>
        );
    };
    return (
        <div className="category-tree">
            <ul className="category-list">
                {categories && categories.map((category) => renderCategory(category))}
            </ul>
        </div>
    );
};
export default CategoryTree;