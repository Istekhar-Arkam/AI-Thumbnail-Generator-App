import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "50 AI Thumbnails/month",
            "Basic Templates",
            "Standard Resolution",
            "No Watermark",
            "Email Support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Access to all Pro courses",
            "Priority community support",
            "30 practice projects",
            "Course completion certificate",
            "Advance code review",
            "1-on-1 mentoring sessions",
            "Job assistance"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Access to all courses",
            "Dedicated support",
            "Unlimited projects",
            "Course completion certificate",
            "Premium code review"
        ],
        mostPopular: false
    }
];