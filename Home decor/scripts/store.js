
//-------------------------------------------------------------------------------//
import navbar from "./navbar.js"

import footer from "./footer.js"

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
//-------------------------------------------------------------------------------//
let data = [
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/fa0de7e5f6db966631851fdd3f058a6b965ff170/SAFAVIEH-California-Shag-Izat-2-inch-Thick-Rug.jpg?imwidth=480&impolicy=medium",
        price: 3131.84,
        ratingsCount: "34.2K",
        name: "SAFAVIEH California Shag Izat 2-inch Thick Area Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/37d9bcf79421ca145356830df977df1434dddce6/Art-Leon-Adjustable-Swivel-Barstool-%28Set-of-2%29.jpg?imwidth=480&impolicy=medium",
        price: 14401.1,
        ratingsCount: 178,
        name: "Art Leon Adjustable Swivel Barstool (Set of 2)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/9af9e0c0ff8225a1b95d62c1c5718b174eb7284c/Laguna-Poly-Outdoor-Folding-Adirondack-Chair.jpg?imwidth=480&impolicy=medium",
        price: 14964.8,
        ratingsCount: 757,
        name: "Laguna Poly Outdoor Folding Adirondack Chair"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/709fee12c5b7e2b834fe98b74814982b8b9a1d15/SAFAVIEH-Madison-Diederike-Boho-Medallion-Distressed-Rug.jpg?imwidth=480&impolicy=medium",
        price: 2303.20,
        ratingsCount: "2.1K",
        name: "SAFAVIEH Madison Diederike Boho Medallion Distressed Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/d755e8e1658e8796e247507c6ef24ac723a4e498/198-PCS-Hand-Tool-Set%2C-Home-Tool-Kit%2C-with-Black-Storage-Box.jpg?imwidth=480&impolicy=medium",
        price: 6202.4,
        ratingsCount: 4,
        name: "198 PCS Hand Tool Set, Home Tool Kit, with Black Storage Box - N/A"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/f8263239bd3ee2db8801150758506fbecac775c8/KRAUS-Kore-Workstation-Undermount-Stainless-Steel-Kitchen-Sink.jpg?imwidth=480&impolicy=medium",
        price: 28512.7,
        ratingsCount: 451,
        name: "KRAUS Kore Workstation Undermount Stainless Steel Kitchen Sink"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/1a9e1dc549b11c36bcebb41fa38aa87ce80be17d/Priage-by-ZINUS-Mid-Century-Wood-Platform-Bed-Frame.jpg?imwidth=480&impolicy=medium",
        price: 21872.6,
        ratingsCount: 67,
        name: "Priage by ZINUS Mid Century Wood Platform Bed Frame"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/b269d73e59511894a9e21d6f96cd8414eb4597f0/Keter-Comfy-Resin-71-Gallon-Deck-Box-Storage-Bench.jpg?imwidth=480&impolicy=medium",
        price: 6384.2,
        ratingsCount: 726,
        name: "Keter Comfy Resin 71-gallon Deck Box Storage Bench"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/6f2f4c20d2f89bed074d54fbdf2ad920533a8657/SAFAVIEH-Vision-Tanasa-Modern-Ombre-Tonal-Rug.jpg?imwidth=480&impolicy=medium",
        price: 2339.74,
        ratingsCount: "6.4K",
        name: "SAFAVIEH Vision Tanasa Modern Ombre Tonal Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e8ea1a84f34fbc32f54be38c621ed83f9d434f29/Exclusive-Fabrics-Italian-Faux-Linen-Curtain-%281-Panel%29.jpg?imwidth=480&impolicy=medium",
        price: 3488.15,
        ratingsCount: 109,
        name: "Exclusive Fabrics Italian Faux Linen Curtain (1 Panel)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/52825ba345728e740da2857dfc365813c703788f/Max-%26-Lily-Full-Bed-with-Trundle.jpg?imwidth=480&impolicy=medium",
        price: 45127.5,
        ratingsCount: 24,
        name: "Max and Lily Full Bed with Trundle"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/001b9a6064d7b8529c75ed0fad7c1f7bd1f636e7/White-Stained-Glass-Floral-Art---Large-Floral-Wall-Art-Canvas.jpg?imwidth=480&impolicy=medium",
        price: 3728.4,
        ratingsCount: 840,
        name: "White Stained Glass Large Floral Wall Art Canvas"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/17805912/P23999822.jpg?imwidth=480&impolicy=medium",
        price: 5891.8,
        ratingsCount: 137,
        name: "Graham & Brown Vinyl Crocodile Grey/Black Wallpaper - 20.5 X 396"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/57e55b6b50af4de47b5b254913333668cb30dec4/SAFAVIEH-Adirondack-Vera-Modern-Ombre-Distressed-Stripe-Area-Rug.jpg?imwidth=480&impolicy=medium",
        price: 2250.21,
        ratingsCount: "7.2K",
        name: "SAFAVIEH Adirondack Vera Modern Ombre Distressed Stripe Area Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/0fca08feca2587d3c7502ed689d8b47150a36076/Moro-Handcrafted-Cotton-Pouf-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium",
        price: 4332.32,
        ratingsCount: 722,
        name: "Moro Handcrafted Modern Cotton Pouf by Christopher Knight Home"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/bb3f076d86649289c98402a62b00203561b40bb7/Copper-Grove-Laren-Swiveling-Adjustable-height-Bar-Stools-%28Set-of-3%29.jpg?imwidth=480&impolicy=medium",
        price: 11743.4,
        ratingsCount: 216,
        name: "Copper Grove Laren Swiveling Adjustable-height Bar Stools (Set of 3)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/f9eb95312add783ae00076983f7702195987dcaf/6-Piece-Bath-Hardware-Set-in-Stainless-Steel-Matte-Black.jpg?imwidth=480&impolicy=medium",
        price: 7680.6,
        ratingsCount: 33,
        name: "6-Piece Bath Hardware Set in Stainless Steel Matte Black"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/04ff932f795e3f35aa3fbabea00cbd1b97b99cc5/Caiden-Elegance-Damask-Tablecloth.jpg?imwidth=480&impolicy=medium",
        price: 1680.12,
        ratingsCount: 130,
        name: "Caiden Elegance Damask Tablecloth"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/257a9eb31d8b70f9681246af4d5e302aa825fa8e/Spirich-Home-Bathroom-Two-Doo-Wall-Cabinet%2C-Wood-Hanging-Cabinet%2C-Wall-Cabinets-with-Doors-and-Shelves-Over-The-Toilet%2C-White.jpg?imwidth=480&impolicy=medium",
        price: 6613.59,
        ratingsCount: 75,
        name: "Spirich-Bathroom Wall Spacesaver Storage Cabinet Over The Toilet with Door , Wooden, White"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/2b1ab8edbfd211c4fb570e71b6432938e9a63f7a/ELEGAN-Shower-Base-Single-Threshold-Left-Right-Drain-White.jpg?imwidth=480&impolicy=medium",
        price: 29381.5,
        ratingsCount: 3,
        name: "ELEGAN Shower Base Single Threshold Left Right Drain White"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e1fb5466f94b0fe6f76093d889cf1cf1ba711dc3/SAFAVIEH-Natura-Gerta-Handmade-Wool-Area-Rug.jpg?imwidth=480&impolicy=medium",
        price: 3204.02,
        ratingsCount: 799,
        name: "SAFAVIEH Natura Gerta Handmade Wool Area Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/7d980b328ce33ccc0cb3d4adbd864675b20e6a09/Chazz-Mid-century-Dining-Chair-by-Christopher-Knight-Home-%28Set-of-2%29.jpg?imwidth=480&impolicy=medium",
        price: 13995.5,
        ratingsCount: 545,
        name: "Chazz Mid Century Fabric Dining Chairs (Set of 2) by Christopher Knight Home"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/fe9532643b8e47a0743a18eb9b7b8b4dea0c0e75/McClellan-7-Bottle-Tabletop-Wine-Rack-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium",
        price: 4274.7,
        ratingsCount: 4,
        name: "McClellan 7 Bottle Tabletop Wine Rack by Christopher Knight Home"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/a68965d3bdfe6c04dfd79c6ad1a4b9fdc41e85e6/Melinda-Black-Gold-Finish-Sculpture.jpg?imwidth=480&impolicy=medium",
        price: 6202.4,
        ratingsCount: 34,
        name: "Melinda Black/Gold Finish Sculpture - 20\"W x 8\"D x 6\"H"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/0c0f878eea933125d42675c8884abd5cfd065f3f/Copper-Grove-Cranesbill-X-base-End-Table.jpg?imwidth=480&impolicy=medium",
        price: 6543.25,
        ratingsCount: "2.8K",
        name: "Copper Grove Cranesbill X-Base 3-Tier End Table with Shelves"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/44d606cf7157741e1e1e4d6b1ec3989ada1d44b1/SAFAVIEH-Florida-Shag-Sigtraud-Abstract-Waves-1.2-inch-Thick-Rug.jpg?imwidth=480&impolicy=medium",
        price: 3985.15,
        ratingsCount: "2.1K",
        name: "SAFAVIEH Florida Shag Sigtraud Abstract Waves 1.2-inch Area Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/20543774/Porch-Den-Bayview-Charcoal-Grey-Upholstered-Bed-08dcf185-9e92-49c2-9785-5205e3705f6c_600.jpg?imwidth=480&impolicy=medium",
        price: 15292.8,
        ratingsCount: 984,
        name: "Porch & Den Bayview Charcoal Grey Grid-tufted Upholstered Panel Bed"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/f3740e332b1b54bfccec1ee81ca045074a93a275/SAFAVIEH-Madison-Snowflake-Medallion-Rustic-Farmhouse-Distressed-Rug.jpg?imwidth=480&impolicy=medium",
        price: 2159.76,
        ratingsCount: "5.9K",
        name: "SAFAVIEH Madison Snowflake Medallion Rustic Farmhouse Distressed Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/14042627/Orange-Awakening-Canvas-Wall-Art-42517ad3-dadd-4f82-99e5-dbb17ed9a5b4_600.jpg?imwidth=480&impolicy=medium",
        price: 3887.39,
        ratingsCount: 637,
        name: "'Orange Awakening' Gallery-wrapped Canvas Wall Art"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/542aab12da41ea1bcc9defde298b8c857c11a23b/Kitchen-Island-with-Natural-Solid-Wood-Top.jpg?imwidth=480&impolicy=medium",
        price: 12251.6,
        ratingsCount: 632,
        name: "2-shelf Natural Solid Wood Top Kitchen Island"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/21d1fd6ad625bf8131c66bc90b8eaa3f87bb863f/Mid-Century-1-Drawer-Nightstand.jpg?imwidth=480&impolicy=medium",
        price: 14529.9,
        ratingsCount: 226,
        name: "Middlebrook Mid-Century Solid Wood 1-Drawer, 1 Shelf Nightstand"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e70513a82f329a2dc91ad57b33d8bc7e9e6c45ed/World-Rug-Gallery-Geometric-Circles-Area-Rug.jpg?imwidth=480&impolicy=medium",
        price: 3717.46,
        ratingsCount: "1.6K",
        name: "World Rug Gallery Geometric Circles Area Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/1100619efe44a2adbb065014895b018f494ffcc6/Caynel-4-Liter-Portable-Mini-Fridge-for-Home%2C-Office-and-Car%2C-AC-DC-Thermoelectric-System.jpg?imwidth=480&impolicy=medium",
        price: 4284.81,
        ratingsCount: 18,
        name: "Caynel 4-Liter Portable Mini Fridge for Home, Office and Car, AC/DC Thermoelectric System"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/fa08f1ac46ed512fb3e9399c4825e7267fef1b51/Modern-Contemporary-Elegant-Blue-Stoneware-Smooth-Glazed-Vase-16%22H-X-5%22D-or-21%22H-X-6%22D.jpg?imwidth=480&impolicy=medium",
        price: 3066.9,
        ratingsCount: 172,
        name: "Blue Modern Smooth Glazed Stoneware Vase"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/5e742ff5ba0cb902586e3a5e684cf1f8eb91cc5f/SAFAVIEH-Brentwood-Gusta-Traditional-Oriental-Rug.jpg?imwidth=480&impolicy=medium",
        price: 2375.38,
        ratingsCount: 343,
        name: "SAFAVIEH Brentwood Gusta Traditional Oriental Rug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/b8c9ee5d9f874b3dd9a93d8e08958becf00cabca/20-in.-W-x-28-in.-L-Single-Beveled-Edge-Bath-Wall-Vanity-Mirror.jpg?imwidth=480&impolicy=medium",
        price: 8813.5,
        ratingsCount: 506,
        name: "Single Beveled Edge Bathroom Wall Vanity Mirror"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/432d8e18b2649f81fab8c7f80687d46907925149/ArtWall-Cora-Niele-%27White-Tulip%27-Gallery-Wrapped-Canvas-Wall-Art.jpg?imwidth=480&impolicy=medium",
        price: 4651.17,
        ratingsCount: 826,
        name: "ArtWall Cora Niele 'White Tulip' Gallery Wrapped Canvas Wall Art"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/1b1f40205253c43c524a81cdb3d3ba0ae6d630df/Solid-Surface-Wall-Mounted-Sinks-36%22-48%22-60%22-72%22.jpg?imwidth=480&impolicy=medium",
        price: 28483.4,
        ratingsCount: 39,
        name: "Pyramid Solid Surface Wall-Mounted Bathroom Sink"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/b134112b90b31e831d272f935361423b260877b4/TeePee-Tent-Twin-Bed.jpg?imwidth=480&impolicy=medium",
        price: 15005.6,
        ratingsCount: 30,
        name: "TeePee Tent Twin Floor Bed"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/20772147/Classic-Ceramic-3x6-inch-Wall-Tile-in-Spa-3x6-04a59e36-5718-4eea-b88b-e7c9e22ea071_600.jpg?imwidth=480&impolicy=medium",
        price: 693.43,
        ratingsCount: 3,
        name: "Classic Ceramic 3x6-inch Wall Tile in Spa - 3x6"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/20772313/Porcelain-2x2-inch-Mosaic-Tile-in-Biscuit-12x24-a8f584a6-8cb0-49e4-b320-479f7242566b_600.jpg?imwidth=480&impolicy=medium",
        price: 690.69,
        ratingsCount: 1,
        name: "Porcelain 2x2-inch Mosaic Tile in Biscuit - 12x24"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/29437282/CoTa-Global-Multicolored-Palm-Tree-Ceramic-Coaster-Kitchen-Dining-4-Inches-Item-9799-3e8fa77e-655c-4ff6-888d-972cf9d3483a_600.jpg?imwidth=480&impolicy=medium",
        price: 644.09,
        ratingsCount: 1,
        name: "CoTa Global - Multicolored Palm Tree Ceramic Coaster - Kitchen & Dining - 4 Inches"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/29437285/CoTa-Global-Gray-and-Blue-Owl-Ceramic-Coaster-Kitchen-Dining-4-Inches-Item-9785-bc46d6c3-08fa-4d49-948f-14990d075f3e_600.jpg?imwidth=480&impolicy=medium",
        price: 681.55,
        ratingsCount: "",
        name: "CoTa Global - Gray and Blue Owl Ceramic Coaster - Kitchen & Dining - 4 Inches"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/334183de8422631d55318e1a60991977dbb7875d/SomerTile-Alloy-3%22-x-6%22-Stainless-Steel-Metal-Over-Porcelain-Subway-Wall-Tile.jpg?imwidth=480&impolicy=medium",
        price: 717.18,
        ratingsCount: 14,
        name: "Merola Tile Alloy 3\" x 6\" Stainless Steel Metal Over Porcelain Subway Wall Tile"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/13002764/Rok-Hardware-Blum-5-8-Overlay-Edge-Mount-Mounting-Plate-For-Compact-33-Hinges-76583843-a554-4aa2-a7b9-b44e78fbd01e_600.jpg?imwidth=480&impolicy=medium",
        price: 810.37,
        ratingsCount: "",
        name: "Rok Hardware Blum Metal 5/8-inch Overlay Edge Mount Mounting Plate for Compact 33 Hinges"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/b09150f005bacd663aa05e879078c59fac1abbf7/Lucida-Peel-and-Stick-Vinyl-Floor-Tiles-36-Wood-Look-Planks-54-Sq.-Ft.jpg?imwidth=480&impolicy=medium",
        price: 821.33,
        ratingsCount: 2,
        name: "Lucida Peel and Stick Vinyl Floor Tiles 36 Wood Look Planks 54 Sq. Ft"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/17432223/Medium-Oil-Rubbed-Bronze-Coat-and-Hat-Hook-9fba89dd-ad1b-4aa2-9a1d-dbb1df4085b1_600.jpg?imwidth=480&impolicy=medium",
        price: 793.92,
        ratingsCount: "",
        name: "Medium Oil-Rubbed Bronze Coat and Hat Hook"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/fc52a3aad9637aee3f0b24a942031e0f0bef2af7/CoTa-Global-Octopus-Sparkling-Refrigerator-Magnet-with-Crystals.jpg?imwidth=480&impolicy=medium",
        price: 713.53,
        ratingsCount: "",
        name: "CoTa Global Octopus Sparkling Refrigerator Magnet with Crystals - 2.15 Inch"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/f8c19983c9802bb65183b1668a8fb79b907e020c/Puzzled-Seashells-Nautical-Ceramic-Coaster.jpg?imwidth=480&impolicy=medium",
        price: 793.92,
        ratingsCount: 6,
        name: "Puzzled Seashells Nautical Ceramic Coaster"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/20058683/Portable-Water-Bottle-Cap-USB-Humidifier-f820b918-d09c-4c88-8a38-8052812096b9_600.jpg?imwidth=480&impolicy=medium",
        price: 793.92,
        ratingsCount: 6,
        name: "Portable Water Bottle Cap USB Humidifier"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/7a0679635b3e38ec03e47f122c38b9ffa33c708f/Agfabric-Floating-Row-Cover-Plant-Protection%2C0.55oz%2CWhite.jpg?imwidth=480&impolicy=medium",
        price: 750.07,
        ratingsCount: 5,
        name: "Agfabric Floating Row Cover Plant Protection,0.55oz,White"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/29436857/CoTa-Global-Ring-Buoy-3D-Designs-Nautical-Blue-Magnet-2pc-Set-Item-7590-291c196b-9454-4786-945d-366e7f2ef5f7_600.jpg?imwidth=480&impolicy=medium",
        price: 836.86,
        ratingsCount: "",
        name: "CoTa Global Ring Buoy - 3D Designs - Nautical Blue Magnet (2pc Set)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/012c5894dba5b016ba1526cb9b8719d36fc052c7/Gold-Cake-Topper-Number-Balloons%2C-Number-30-Balloon-%287.5-In%29.jpg?imwidth=480&impolicy=medium",
        price: 846.00,
        ratingsCount: "",
        name: "Gold Cake Topper Number Balloons, Number 30 Balloon (7.5 In)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/23542141/Lotus-Harmony-87efa702-8352-4090-be1d-abc15b35d45c_600.jpg?imwidth=480&impolicy=medium",
        price: 854.22,
        ratingsCount: 17,
        name: "Lotus Harmony Tailored Window Panel"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/0824700f8af91480f6d86197543bbd9b86b5614f/SomerTile-Tribeca-2%22-Hex-Glossy-12.63%22x10.63%22-Periwinkle-Ceramic-Mosaic-Tile.jpg?imwidth=480&impolicy=medium",
        price: 858.79,
        ratingsCount: 3,
        name: "Merola Tile Tribeca 2\" Hex Glossy 12.63\"x10.63\" Periwinkle Ceramic Mosaic Tile"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/25b370417798f6436dcc735479a8af6c081cc2d9/4-1-2-in.-x-3-1-4-in.-Unfinished-Solid-Hardwood-Round-Bun-Foot.jpg?imwidth=480&impolicy=medium",
        price: 901.73,
        ratingsCount: "",
        name: "4-1/2 in. x 3-1/4 in. Unfinished Solid Hardwood Round Bun Foot"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/29437322/CoTa-Global-Green-Sand-and-Shells-Bottle-Ornament-Nautical-Decor-Item-9237-e7c75d60-834c-4e8d-8eeb-6a2739125281_600.jpg?imwidth=480&impolicy=medium",
        price: 863.36,
        ratingsCount: "",
        name: "CoTa Global Green Sand and Shells Bottle Ornament - Nautical Decor"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/30084794/25-Foot-Rubberized-Tape-Measure-with-Quick-Stop-Button-black-yellow-red-9aef802c-c065-4535-82c6-0dd96ac6c852_600.jpg?imwidth=480&impolicy=medium",
        price: 871.58,
        ratingsCount: 18,
        name: "25 Foot Rubberized Tape Measure with Quick Stop Button - black yellow red"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/21281308/Rok-Hardware-5mm-Straight-Pin-Cylinder-Cabinet-Shelf-Support-50-Pack-62336c3e-ca03-4ecf-a7b9-64e5fedf6f28_600.jpg?imwidth=480&impolicy=medium",
        price: 774.74,
        ratingsCount: 1,
        name: "Rok Hardware 5mm Straight Pin Cylinder Cabinet Shelf Support, 50 Pack"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/28056716/Salsa-Bowls-Tazon-para-Salsas-Plastic-Mexico-Molcajete-Chips-Guacamole-Set-of-3-d48953d0-28a8-4e5a-9b3d-f92976d68a77_600.jpg?imwidth=480&impolicy=medium",
        price: 929.14,
        ratingsCount: "",
        name: "Salsa Bowls Tazon para Salsas Plastic Mexico Molcajete Chips Guacamole-Set of 3"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/72b22c461ae2403cd3c192af43ecb8d9642e8acb/Kettle-Grove-Jute-Oval-Placemat-10x15.jpg?imwidth=480&impolicy=medium",
        price: 888.94,
        ratingsCount: "",
        name: "Kettle Grove Jute Oval Placemat 10x15"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/17767534/1-5-8-Solid-Clear-Round-Diamond-Cut-Shape-Crystal-Glass-Kitchen-Bath-Knobs-Set-of-4-7b7eaa70-5ea8-4e21-8494-903d48bf05d1_600.jpg?imwidth=480&impolicy=medium",
        price: 829.55,
        ratingsCount: 11,
        name: "1-5/8\" Solid Clear Round Diamond Cut Shape Crystal Glass Kitchen & Bath Knobs (Set of 4)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/3f4f867b133749161d3ac16e0a7f34279d6d98c5/CoTa-Global-Penguin-Sparkling-Refrigerator-Magnet-with-Crystalst.jpg?imwidth=480&impolicy=medium",
        price: 895.33,
        ratingsCount: 8,
        name: "CoTa Global Penguin Sparkling Refrigerator Magnet with Crystalst - 2 Inches"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/4061aa319e51c8317c316a4edc70da55cba047d3/SomerTile-Stella-Hex-Nero-8-5-8%22-x-9-7-8%22-Porcelain-Floor-and-Wall-Tile.jpg?imwidth=480&impolicy=medium",
        price: 949.24,
        ratingsCount: "",
        name: "Merola Tile Stella Hex Nero 8-5/8\" x 9-7/8\" Porcelain Floor and Wall Tile"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/11672302/Achim-Buffalo-Checkered-Valance-5dca9da2-c003-47d5-9d54-b3365803f9ae_600.jpg?imwidth=480&impolicy=medium",
        price: 847.83,
        ratingsCount: 31,
        name: "Primitive Buffalo Checkered Cafe Curtain Set - 14 x 58"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/28f211fd3396b770adec159f406969132cc353aa/36x-Pantry-Labels-Stickers-for-Food-Storage-Kitchen-Organization-Jars-Containers.jpg?imwidth=480&impolicy=medium",
        price: 898.07,
        ratingsCount: "",
        name: "36x Pantry Labels Stickers for Food Storage Kitchen Organization Jars Containers"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/29437319/Cota-Global-Aquarius-Hanging-Starfish-Wall-Accent-Nautical-D-cor-Item-9163-8ba86af9-9b02-4b9a-b12c-7820bc729ace_600.jpg?imwidth=480&impolicy=medium",
        price: 814.94,
        ratingsCount: 1,
        name: "CoTa Global Aquarius Hanging Starfish Wall Accent - Nautical Decor"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/fc4771dc0414aac1974e98e14cbd9619841622de/Puzzled-Surf%27s-Up-Multicolor-Ceramic-Nautical-Coaster.jpg?imwidth=480&impolicy=medium",
        price: 906.30,
        ratingsCount: 1,
        name: "Puzzled Surf's Up Multicolor Ceramic Nautical Coaster"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/13725159/Seattle-Skyline-Blackboard-Blackboard-Ceramic-Mini-Mug-7c2d1e8a-2507-4617-9de7-132e586fc9d5_600.jpg?imwidth=480&impolicy=medium",
        price: 906.30,
        ratingsCount: "",
        name: "Puzzled Seattle Skyline Blackboard Ceramic Mini Mug"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/dafe2173ab87c396aaec25508e5831dd586a0f85/224x-Clear-Label-Sticker-for-Closet%2C-Clothing%2C-Shoes%2C-Sport-Organizer-Bin-Basket.jpg?imwidth=480&impolicy=medium",
        price: 906.30,
        ratingsCount: "",
        name: "224x Clear Label Sticker for Closet, Clothing, Shoes, Sport Organizer Bin Basket"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/55dc9162ba978395eb686593fc0d20ccc5beb026/SomerTile-Twist-Square-Yellow-Lemon-11.75%22-x-11.75%22-Ceramic-Mosaic.jpg?imwidth=480&impolicy=medium",
        price: 915.43,
        ratingsCount: 2,
        name: "Merola Tile Twist Square Yellow Lemon 11.75\" x 11.75\" Ceramic Mosaic"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/11817213/Rok-Hardware-Blum-1-4-Overlay-Edge-Mount-Mounting-Plate-For-Compact-33-Hinges-4d0b131b-6192-426e-a398-dd48f2d8324a_600.jpg?imwidth=480&impolicy=medium",
        price: 846.00,
        ratingsCount: "",
        name: "Rok Hardware Blum 1/4-inch Overlay Edge Mount Mounting Plate for Compact 33 Hinges"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/e386501181acd96123ebd3c939744f5669fcc89b/Seafood-Scissors.jpg?imwidth=480&impolicy=medium",
        price: 924.57,
        ratingsCount: "",
        name: "Seafood Scissors"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/a550dd4307d3b1cdb43030d7b3814e1e77efcfd2/Puzzled-Silver-%26-Blue-Dolphin-Shot-Glass-1.70-Oz-Quality-Glassware.jpg?imwidth=480&impolicy=medium",
        price: 932.79,
        ratingsCount: "",
        name: "Puzzled Silver & Blue Dolphin Shot Glass 1.70 Oz Quality Glassware"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/20864336/Modern-Edge-Pull-3-5-32-Centers-Satin-Gold-Cabinet-Handle-63d340c3-2854-4b71-9631-a39471fb452b_600.jpg?imwidth=480&impolicy=medium",
        price: 983.95,
        ratingsCount: "",
        name: "Modern Edge Pull 3-5/32\" Centers Satin Gold Cabinet Handle"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/b49e9fab7e3350d37d4242988e6feec4a2fde864/Pop-Up-Drain-with-Overflow.jpg?imwidth=480&impolicy=medium",
        price: 932.79,
        ratingsCount: "",
        name: "Pop-Up Drain with Overflow"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/20892075/Traditional-Flared-Sumo-3-Centers-Chrome-Cabinet-Pull-Handle-3649a5a7-72fe-45f9-a809-ce52b27350a7_600.jpg?imwidth=480&impolicy=medium",
        price: 994.00,
        ratingsCount: "",
        name: "Traditional Flared Sumo 3\" Centers Chrome Cabinet Pull Handle"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/365afbfad7bb9d1423b71ad61a578f8f43d1fbf1/No.-918-Emily-Sheer-Voile-Single-Curtain-Panel.jpg?imwidth=480&impolicy=medium",
        price: 888.94,
        ratingsCount: "1.1K",
        name: "No. 918 Emily Voile Sheer Rod Pocket Curtain Panel, Single Panel"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/10191348/Rok-Hardware-Contemporary-Brushed-Nickel-Euro-Style-Solid-Metal-Pull-Handle-aa40bb68-9bbd-4d71-a242-f61ca6232955_600.jpg?imwidth=480&impolicy=medium",
        price: 854.22,
        ratingsCount: 7,
        name: "Rok Hardware Contemporary Brushed Nickel Euro Style Solid Metal Pull Handle"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/9a1dba9e3b5867ce3342ea7dd8078047b06e686a/Cheer-Collection-Vegetable-Peeler-and-Spiralizer.jpg?imwidth=480&impolicy=medium",
        price: 949.24,
        ratingsCount: "",
        name: "Cheer Collection Vegetable Peeler and Spiralizer"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/12737a4652019e8ba05849bece0148c0a679f68e/No.-918-Erica-Sheer-Crushed-Voile-Single-Curtain-Panel.jpg?imwidth=480&impolicy=medium",
        price: 852.39,
        ratingsCount: 847,
        name: "No. 918 Erica Sheer Crushed Voile Single Curtain Panel, Single Panel"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/12270107/Miller-Curtains-Preston-84-Inch-Rod-Pocket-Sheer-Curtain-Panel-4c30be39-86fa-491c-bf47-f360e85e5e76_600.jpg?imwidth=480&impolicy=medium",
        price: 913.61,
        ratingsCount: 38,
        name: "Miller Curtains Preston 84-Inch Rod Pocket Sheer Curtain Panel"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/5efb44a24e24ff20c4d779b9a574da2f8cebd5ab/Novica-Handmade-Fresh-Ikat-Handmade-Paper-Photo-Frame-%282X2-In%29.jpg?imwidth=480&impolicy=medium",
        price: 966.60,
        ratingsCount: "",
        name: "Novica Handmade Fresh Ikat Handmade Paper Photo Frame (2X2 In)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/66f14684872fe5586af8a1f07348087c1cb90224/Stainless-Steel-Engraved-Spoon-with-Gift-Box%2C-My-Peanut-Butter-Spoon-Personalized-%287.8-Inches%29.jpg?imwidth=480&impolicy=medium",
        price: 966.60,
        ratingsCount: "",
        name: "Stainless Steel Engraved Spoon with Gift Box, My Peanut Butter Spoon Personalized (7.8 Inches)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/21722307/Rectangle-Brushed-Oil-Rubbed-Bronze-Cabinet-Knob-1-9-16-41bdd3c4-c7af-4009-98da-2926f21016d5_600.jpg?imwidth=480&impolicy=medium",
        price: 1030.5,
        ratingsCount: "",
        name: "Rectangle Brushed Oil-Rubbed Bronze Cabinet Knob 1-9/16"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/68a7cdeefb9abb8810fa2e0a6a97f6539c756572/CounterArt-Black-Lattice-Wire-Square-Coaster-Holder.jpg?imwidth=480&impolicy=medium",
        price: 875.23,
        ratingsCount: "",
        name: "CounterArt Black Lattice Wire Square Coaster Holder - 4x4"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/1ca1223690fc691aa5ffd206c30e95c9d5633930/LED-Headlamp.jpg?imwidth=480&impolicy=medium",
        price: 974.82,
        ratingsCount: 47,
        name: "LED Headlamp"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/930383c5ba86fc8f4816c403d8d97a28de438bbd/Hand-Washing-Station-Signs-for-Kids%2C-%22Please-Wash-Your-Hands%22-%284-x-6-Inches%2C-12-Pack%29.jpg?imwidth=480&impolicy=medium",
        price: 936.45,
        ratingsCount: "",
        name: "Hand Washing Station Signs for Kids, \"Please Wash Your Hands\" (4 x 6 Inches, 12 Pack)"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/b0eab443e791d4caa0e45c8722695405abf04590/Sawyer-Mill-Charcoal-Creme-Jute-Oval-Placemat-10x15.jpg?imwidth=480&impolicy=medium",
        price: 1038.7,
        ratingsCount: "",
        name: "Sawyer Mill Charcoal Creme Jute Oval Placemat 10x15"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/29438438/CoTa-Global-Blue-and-Silver-Sand-and-Shell-Beach-Bucket-Bottle-Decor-Accents-4-Inches-Item-9759-9cb7fb57-af68-4d89-8e7e-88a9e276b431_600.jpg?imwidth=480&impolicy=medium",
        price: 993.09,
        ratingsCount: "",
        name: "CoTa Global - Blue and Silver Sand and Shell Beach Bucket Bottle - Decor Accents - 4 Inches"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/420171fde05ed8c41049fb45c78c39ff61443a72/136-PCS-Pantry-Organizer-Label-Stickers-for-Spice-Kitchen-Organizer-White-Script.jpg?imwidth=480&impolicy=medium",
        price: 952.89,
        ratingsCount: "",
        name: "136 PCS Pantry Organizer Label Stickers for Spice Kitchen Organizer White Script"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/9edc6558d110f483473ede075b4cdfb98dbbaa24/Popsicle-Zip-Sealed-Bags%2C-Funnel-5-Pcs-Disposable-Otter-Freeze-Pop-Molds.jpg?imwidth=480&impolicy=medium",
        price: 1001.3,
        ratingsCount: 1,
        name: "Popsicle Zip Sealed Bags, Funnel 5 Pcs Disposable Otter Freeze Pop Molds"
    },
    {
        image: "https://ak1.ostkcdn.com/images/products/is/images/direct/27ca242a645dc59c36ff3b9561acec345cc808cc/Puzzled-Dolphin-Cove-Multicolor-Resin-Handcrafted-Candleholder.jpg?imwidth=480&impolicy=medium",
        price: 1010.4,
        ratingsCount: "",
        name: "Puzzled Dolphin Cove Multicolor Resin Handcrafted Candleholder - 3Lx2.5Wx1.75H"
    }
]


function append_data(){
    document.getElementById("clocks_container").innerHTML = null;
    data.forEach( (el) => {
     
    let div = document.createElement("div");
    div.setAttribute("id" , "clock_card");
    div.addEventListener("click", function (){
             store_data(el)
    })

    let img = document.createElement("img");
    img.src = el.image;

    let price = document.createElement("p");
    price.innerText = `Sale Starts at INR ${el.price}`; 
    price.setAttribute("class" , "price");

    let title = document.createElement("p");
    title.innerText = el.name;
    title.setAttribute("class" , "clock_title");

    div.append(img , price , title);
    document.getElementById("clocks_container").append(div);

    })

  }
  //----------------------------------------------------------------------------//
function  store_data(el) {
   
    localStorage.setItem("mydata", JSON.stringify(el));
    window.location.href = "Productpage.html";
}
  //----------------------------------------------------------------------------//
  append_data()

  //----------------------------------- Side List Collapsible list--------------------------------------------//
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//------------------------------------ Sorting -------------------------------------------//

 document.getElementById("sort_ele").addEventListener("change" , sort_clicked);

function sort_clicked(){
    let selected  = document.getElementById("sort_ele").value;
   
    if(selected=="lth"){
       
        let res = data.sort(function (a,b){
            return a.price-b.price;
        });
        append_data(res);
    }
    if(selected=="htl"){
        
        let res = data.sort(function (a,b){
            return b.price-a.price;
        });
        append_data(res);
    }
    
}

    

////////////////////////////////////////////


// data.forEach(({ productCardFrontImage, price, name, ratingsCount }) => {

// card.onclick = () => {
//     let obj = { productCardFrontImage, price, productCardFrontTitle, ratingsCount }
//     localStorage.setItem("mydata", JSON.stringify(obj));
//     window.location.href = "Productpage.html"
// }