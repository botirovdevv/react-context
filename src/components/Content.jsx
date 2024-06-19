import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageProvider';

const Content = () => {
    const { language } = useContext(LanguageContext);
    const [value, setValue] = useState('Salom Dunyo');

    useEffect(() => {
        switch (language) {
            case 'en':
                setValue('Hello world');
                break;
            case 'ru':
                setValue('Privet');
                break;
            default:
                setValue('Salom Dunyo');

        }
    }, [language]);

    return (
        <div>
            <h1>{value}</h1>
        </div>
    );
};

export default Content;
