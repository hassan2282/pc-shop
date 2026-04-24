import React, { useEffect, useState } from 'react';
import { TbArrowLeft } from 'react-icons/tb';
import apiClient from '../../../apiClient';
import { motion } from 'motion/react';
import { toast } from 'react-toastify';

function Adm_category_tree() {
    const [categories, setCategories] = useState([]);
    const [expanded, setExpanded] = useState(new Set());
    
    useEffect(() => {
        const allCategories = async () => {
            try {
                const { data, status } = await apiClient.get('/category/all');
                
                if (status >= 200 && status < 300) {
                    setCategories(data);
                }
            } catch (err) {
                toast.error('فرایند واکشی دسته بندی ها با شکست مواجه شد !');
                console.error("Error fetching categories:", err);
            }
        };
        allCategories();
    }, []);
    
    // تابع بازگشتی برای رندر کردن دسته‌بندی‌ها و تمام فرزندانشان
    const renderCategory = (category, index, level = 0) => {
        const isExpanded = expanded.has(category.id);
        const hasChildren = category.children && category.children.length > 0;
        
        // محاسبه تورفتگی بر اساس سطح درخت
        const indentStyle = {
            paddingLeft: `${level * 1.5}rem`,
        };
        
        return (
            <motion.li
                initial={{ filter: "blur(10px)", opacity: 0, x: -60 }}
                animate={{ filter: 'none', opacity: 1, x: 0 }}
                transition={{ duration: 0.4 * index, ease: "easeIn" }}
                key={category.id}
                className="flex flex-col border-t-[0.1rem] shadow-sm border-white/70 rounded-2xl
                        backdrop-blur-xl items-start py-2 px-3 hover:bg-white/20 hover:shadow-lg
                        cursor-pointer transition-colors duration-100 bg-white/5"
                style={indentStyle}
            >
                <div className="flex items-center w-full px-2">
                    <span onClick={() => {
                        if (hasChildren) {
                            const newExpanded = new Set(expanded);
                            if (newExpanded.has(category.id)) {
                                newExpanded.delete(category.id);
                            } else {
                                newExpanded.add(category.id);
                            }
                            setExpanded(newExpanded);
                        }
                    }} className="flex-1">
                        {category.name}
                    </span>
                    {hasChildren && ( 
                            <TbArrowLeft size={20} className={`text-blue-700 duration-400 ${isExpanded ? '-rotate-90' : ''}`} />
                    )}
                </div>
                {hasChildren && isExpanded && (
                    <motion.ul
                    initial={{height:0}}
                    animate={{height: 'auto'}}
                    transition={{duration:0.5, ease:"easeOut"}}
                    key={isExpanded}
                    className="mt-1 w-full space-y-1 p-3">
                        {category.children.map((child, childIndex) => 
                            renderCategory(child, childIndex, level + 1)
                        )}
                    </motion.ul>
                )}
            </motion.li>
        );
    };
    
    return (
        <div className="flex flex-row rounded-lg z-10 w-[90%] mr-5 mt-[2rem] text-black/70" dir='rtl'>
            <ul className="grid grid-cols-1 w-full gap-2 z-10">
                {categories &&
                    categories
                        .filter(category => category.parent_id === null)
                        .map((category, index) => renderCategory(category, index))
                }
            </ul>
        </div>
    );
}

export default Adm_category_tree;