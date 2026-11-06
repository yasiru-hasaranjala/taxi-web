const CONFIG = {
    businessName: "Ceylonese Rides",
    tagline: "Discover the Island in Pure Comfort.",
    description: "Experience the incredible beauty of Sri Lanka safely and comfortably with our premium taxi and tour services.",

    contact: {
        whatsappNumber: "+94770832456",
        whatsappLink: "https://wa.me/94770832456?text=Hello%20Ceylonese%20Rides!%20I%27d%20like%20to%20book%20a%20taxi.",
        email: "info@ceyloneserides.com",
        phone: "+94 77 083 2456"
    },

    fleet: {
        primaryVehicle: "Suzuki Wagon-R",
        // Local photo first; remote copy is a fallback if the local file is missing
        vehicleImages: [
            "assets/wagonR.jpeg",
            "https://carmarket.lk/storage/app/vehicle_images/697841489535f.jpeg"
        ],
        keyFeatures: [
            "Fully Air-Conditioned Cabin",
            "Ample Luggage Space for Travelers",
            "Fuel Efficient & Budget Friendly",
            "Perfect for Couples & Small Families",
            "Professional, Experienced Drivers",
            "Available 24 Hours a Day"
        ]
    },

    // All IDs extracted live from Unsplash network requests
    destinations: [
        {
            name: "Sigiriya",
            subtitle: "Ancient Rock Fortress & Elephants",
            images: [
                "https://images.unsplash.com/photo-1550754706-432b118ee3d7?q=80&w=900&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1580635849262-3161a7c99dac?q=80&w=900&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1711389585454-33469c107ecf?q=80&w=900&auto=format&fit=crop"
            ]
        },
        {
            name: "Ella",
            subtitle: "Nine Arch Bridge & Hill Country",
            images: [
                "https://images.unsplash.com/photo-1678914906840-ad72d72986f6?q=80&w=900&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1708877873622-31029cb6f0b1?q=80&w=900&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1597875296286-74c05fe49182?q=80&w=900&auto=format&fit=crop"
            ]
        },
        {
            name: "Yala",
            subtitle: "Leopards, Deer & Wild Safari",
            // Verified live from Unsplash leopard-yala-sri-lanka network requests
            images: [
                "https://images.unsplash.com/photo-1705936981595-dea87508ce84?q=80&w=900&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1627401099591-4772d63b86a4?q=80&w=900&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1621847473222-d85c022cbf07?q=80&w=900&auto=format&fit=crop"
            ]
        },
        {
            name: "Kandy",
            subtitle: "Temple of the Sacred Tooth",
            images: [
                "https://sandinmysuitcase.com/wp-content/uploads/2021/04/Kandy-Sri-Lanka.jpg?q=80&w=900&auto=format&fit=crop",
                "https://sandinmysuitcase.com/wp-content/uploads/2021/04/Kandy-Sri-Lanka.jpg?q=80&w=900&auto=format&fit=crop",
                "https://sandinmysuitcase.com/wp-content/uploads/2021/04/Kandy-Sri-Lanka.jpg?q=80&w=900&auto=format&fit=crop"
            ]
        }
    ],

    // Hero background — verified scenic Sri Lanka landscapes (hills/tea plantations)
    heroImages: [
        "https://images.unsplash.com/photo-1656314945066-edca54a983ec?q=90&w=2400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1621358670052-d34a786a9385?q=90&w=2400&auto=format&fit=crop"
    ],

    footerYear: new Date().getFullYear()
};

window.AppConfig = CONFIG;
