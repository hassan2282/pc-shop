import { TbBasket, TbHeart, TbSearch } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function DraggableProducts({ products }) {
    const BASE_URL = import.meta.env.VITE__BASEURL;
    const dispatch = useDispatch();

    const handlePurchase = (product) => {

        dispatch({
            type: "purchase",
            payload: {
                id: product.id,
                media: product.media[0]?.name,
                price: product.price,
                title: product.title,
                count: product.count ? (product.count + 1) : 1,
            },
        });

        toast.success('محصول به سبد خرید اضافه شد');

    };



    return (
        <div className="product-carousel owl-carousel owl-theme">

            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-between items-center h-[25rem] group">
                            <Link to={`/store/single-product/${product.id}`} className='border-b border-gray-300 w-full'>
                                <img style={{ height: "15rem" }} src={product.media[0] !== undefined ? BASE_URL + '/storage/media/' + product?.media[0]?.name :
                                                        `../src/StorePanel/assets/img/product_img/p_${Math.floor(Math.random(0, 1) * 23)}.jpg`} className="" alt="" />
                            </Link>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <h2 className="flex w-full justify-center items-center">
                                    <Link to={`/store/single-product/${product.id}`} className='text-sm'> {product.title}  </Link>
                                </h2>
                                <div className="flex flex-col justify-center items-center max-sm:text-[0.6rem]">
                                    <del><span className='text-red-500'>{Math.floor(product.price * 1.2).toLocaleString()}<span>تومان</span></span></del>
                                    <div className='flex flex-row'>
                                        <span className="discount_badge max-sm:hidden">20%</span>
                                        <span>{product.price.toLocaleString()}<span>تومان</span></span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-3 justify-between items-center w-full border-[0.5px]
                                bg-[#4AACB1] p-1 border-gray-300 rounded-full h-6 group-hover:h-10 duration-300">
                                    <span className="flex flex-row gap-2">
                                        <Link to={`/store/single-product/${product.id}`} className="" aria-hidden="true">
                                            <TbSearch size={30} className='bg-[#F1F9FA] hover:scale-90 duration-200 hover:text-[#4AACB1] cursor-pointer rounded-full p-1' />
                                        </Link>
                                        <TbHeart size={30} className="max-sm:hidden bg-[#F1F9FA] hover:scale-90 duration-200 hover:text-rose-500 cursor-pointer rounded-full p-1" aria-hidden="true" />
                                    </span>

                                    <div onClick={() => handlePurchase(product)} className="hover:scale-90 duration-200 cursor-pointer">
                                        <TbBasket size={30} className="bg-[#F1F9FA] hover:text-[#4AACB1] text-zinc-500 p-1 rounded-full" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default DraggableProducts