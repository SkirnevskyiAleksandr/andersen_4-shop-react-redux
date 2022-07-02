import React from 'react';
import AboutUsStyle from './AboutUs.module.css';

export const AboutUs = () => {
    return (
        <div className={AboutUsStyle.wrapper}>
            <h2>About Us</h2>
            <p className={AboutUsStyle}>
                Overstock has had a long history that they want to tell the world about. That is why they’ve created a clever interactive timeline that summarizes all the milestones the company has experienced in their About Us page. For instance when the company was rated #4 in the American Customer Satisfaction Index for Customer Satisfaction in 2004, or when they became the first major company to accept bitcoin as a form of payment in 2014, or in 2018 when they introduced augmented reality to their shopping app for Android users using Google’s ARCore technology. Overstock feels that their visitors want to consume this information and uses their About Us page for that.
            </p>
        </div>
    );
}

