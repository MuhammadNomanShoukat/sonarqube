import Header_logo from "../assets/images/header-logo.png";

export const DB = {
    NAVIGATIONS:[
        {
            id: 1,
            title: "Home",
            path: "/",
            headerLogo: Header_logo
        },
        {
            id: 2,
            title: "About",
            path: "/about",
            innerMenu:[
                {id: 1, title: "Careers", path: "/"},
                {id: 2, title: "Success Stories", path: "/"},
                {id: 3, title: "Testimonials", path: "/"},
                {id: 4, title: "Earn Rewards with Our Referral Program", path: "/"},
                {id: 5, title: "Blogs", path: "/"}
            ]
        },
        {
            id: 3,
            title: "Services",
            path: "/services",
            innerMenu:[
                {id: 1, title: "Truck Dispatching", path: "/"},
                {id: 2, title: "Billing", path: "/"},
                {id: 3, title: "Document Management", path: "/"},
                {id: 4, title: "Factoring Service", path: "/"},
                {id: 5, title: "Rate Negotiation", path: "/"}
            ]
        },
        {
            id: 4,
            title: "Truck types",
            path: "/truck-types",
            innerMenu:[
                {id: 1, title: "Dry Van"},
                {id: 2, title: "Step Deck"},
                {id: 3, title: "Reefer"},
                {id: 4, title: "Flatbed"},
                {id: 5, title: "Power Only"}
            ]
        },
        {
            id: 5,
            title: "How to start",
            path: "/how-to-start",
        },
        {
            id: 6,
            title: "Shippers",
            path: "/shippers",
        },
        {
            id: 7,
            title: "FAQ",
            path: "/faq",
        },
        {
            id: 8,
            title: "Contact us",
            path: "/contact-us",
        },
        {
            id: 9,
            title: "+1 (302) 425-93-15",
            path: "tel:+1 (302) 425-93-15",
        }
    ],
    BANNER:{
        title1: "Freight",
        title2: "Dispatch",
        title3: "Service",
        buttonTitle: "302 425 92 99 "
    },
    CONTACT_FORM:{
        fields:[
            {
                id:1,
                name: "Full Name",
                type: "text",
                placeholder: "Full Name",
                className: "",
                readonly: false,
            },
            {
                id:2,
                name: "Phone number",
                type: "text",
                placeholder: "Phone number",
                className: "",
                readonly: false,
            },
            {
                id:3,
                name: "Email",
                type: "text",
                placeholder: "Email",
                className: "",
                readonly: false,
            },
            {
                id:4,
                name: "I have read and agree to Terms of Service",
                type: "checkbox",
                className: "",
                readonly: false,
            }
        ]
    }
}
