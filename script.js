// function to navigation bar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
// hide the side bar states the popup contents
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// variable for the laptops 
const laptops = {

    AcerPredator: {
        name: "ACER Predator Helios Neo PHN16-71-55V5",
        image:"gaming/ACER Predator Helios Neo PHN16-71-55V5 GeForce RTX  4060 Intel  Core  i5 Laptop (Obsidian Black).png",
        description: [

            "Operating System: Windows 11 Home",            
            "Processor: Intel Core i5-13500HX",            
            "Graphics: NVIDIA GeForce RTX 4060",            
            "Panel Size: 16 inches",            
            "Panel Type: IPS",            
            "Refresh Rate: 165Hz",            
            "Resolution: 1920 x 1200 (WUXGA)",            
            "RAM: 16GB DDR5",            
            "Storage: 512GB NVMe SSD",            
            "Battery: 90Wh Li-ion battery",           
            "Price: ₱69,999", 
                      
        ]
    },
    AsusRogStrixG18: {
        name: "Asus ROG Strix G18 G814JIR-N6083WSM",
        image:"gaming/Asus ROG Strix G18 G814JIR-N6083WSM.png" ,
        description: [

            "Operating System: Windows 11 Home",
            "Processor: Intel Core i9-14900HX",
            "Graphics: NVIDIA GeForce RTX 4070",
            "Panel Size: 18-inch",
            "Panel Type: IPS-level display",
            "Refresh Rate: 240Hz",
            "Resolution: 2560 x 1600",
            "RAM: 16GB DDR5-5600 SO-DIMM",
            "Storage: 1TB PCIe 4.0 NVMe M.2 SSD",
            "Battery: 90WHrs, 4S1P, 4-cell Li-ion",
            "Price: ₱161,999", 

        ]
    },
    ThunderobotTBook: {
        name: "Thunderobot T-Book 15N-R75700UF60L160BB",
        image:"mainstream/THUNDEROBOT T-Book 15N-R75700UF60L160BB AMD.png",
                                
        description: [

            "Operating System: Windows 11",
            "Processor: AMD Ryzen 7-5700U",
            "Graphics: AMD Radeon Graphics",
            "Panel Size: 15.6-inch",
            "Panel Type: IPS-level display",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 16GB DDR4",
            "Storage: 512GB NVMe SSD",
            "Battery: 90WHrs, 4S1P, 4-cell Li-ion",
            "Price: ₱34,495",

        ]
    },
    LenovoV15G3IAP: {
        name: "Lenovo V15 G3 IAP (82TT00CRPH)",
        image: "mainstream/LENOVO V15 G3 IAP (82TT00CRPH) Intel Core i7 Laptop (Iron Grey).png",
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i7-1255U",
            "Graphics: Intel Iris Xe Graphics",
            "Panel Size: 15.6-inch",
            "Panel Type: TN",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 16GB DDR4",
            "Storage: 512GB NVMe SSD",
            "Battery: 38Wh Li-ion battery",
            "Price: ₱59,995",

        ]
    },
    AsusTuf: {
        name: "ASUS TUF FX505DY-AL080T",
        image: "gaming/ASUS TUF FX505DY-AL080T RYZEN 5 3550H.png",
        description: [

            "Operating System: Windows 11",
            "Processor: AMD Ryzen 5-3550H",
            "Graphics: AMD Radeon RX 560X",
            "Panel Size: 15.6-inch",
            "Panel Type: IPS-level display",
            "Refresh Rate: 120Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4",
            "Storage: 1TB HDD + 512GB NVMe SSD",
            "Battery: 48Wh Li-ion battery",
            "Price: ₱35,995",

        ]
    },
    LenovoThinkBook: {
        name: "Lenovo ThinkBook 13s Gen 2 (20V9002NPH)",
        image:"mainstream/LENOVO ThinkBook 13s Gen 2 (20V9002NPH) Intel Core i5 Laptop (Mineral Grey).png",
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i5-1135G7",
            "Graphics: Intel Iris Xe Graphics",
            "Panel Size: 13.3 inches",
            "Panel Type: IPS-level display",
            "Refresh Rate: 60Hz",
            "Resolution: 2560 x 1600 (WQXGA)",
            "RAM: 8GB DDR4",
            "Storage: 512GB NVMe SSD",
            "Battery: 56Wh Li-ion battery",
            "Price: ₱34,495",
        ]
    },
    HpOmen: {
        name: "HP Omen 14-FB0555TX (A32XYPA)",
        image:"gaming/HP Omen 14-FB0555TX (A32XYPA) GeForce RTX 4070 Intel Core Ultra 9 Laptop (Ceramic White).png",
        description: [
           "Operating System: Windows 11",
            "Processor: Intel Core Ultra 9 185H",
            "Graphics: GeForce RTX™ 4070",
            "Panel Size: 14 inches",
            "Panel Type: OLED display",
            "Resolution: 2.8K (2880 x 1800)",
            "Refresh Rate: 120Hz",
            "RAM: 32GB DDR5",
            "Storage: 1TB M.2 PCIe NVMe SSD",
            "Battery: 4-cell, 72.4 Wh Li-ion polymer",
            "PRICE: ₱131,990.00",
        ]
    },
    LenovoIdeaPad3: {
        name: "Lenovo IdeaPad 3 15ITL6 Slim 3 (82H803T2PH)",
        image:"mainstream/LENOVO IdeaPad 3 15ITL6 Slim 3 (82H803T2PH) Intel Core i5 Laptop (Arctic Grey).png",
        description: [
            "Operating System: Windows 11",
            "Processor: Intel Core i5-1155G7",
            "Graphics: Intel Iris Xe Graphics",
            "Panel Size: 15.6 inches",
            "Panel Type: TN",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4",
            "Storage: 512GB NVMe SSD",
            "Battery: 45Wh Li-ion battery",
            "Price: ₱31,995",
        ]
    },
    HpPavGaming: {
        name: "Hp Pavilion GAMING 15-EC2087AX",
        image:"gaming/HP PAV GAMING 15-EC2087AX  RYZEN 5-5600H.png",
        description: [

            "Operating System: Windows 10",
            "Processor: AMD Ryzen 5-5600H",
            "Graphics: NVIDIA GeForce RTX 3050",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 144Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4-3200",
            "Storage: 512GB NVMe SSD",
            "Battery: 52.5Wh Li-ion battery",
            "Price: ₱45,995",

        ]
    },
    HpPavilion15: {
        name: "Hp PAVILION 15-EH2042AU ",
        image:"mainstream/HP PAVILION 15-EH2042AU  RYZEN 5-5625U.png",
        description: [
            "Operating System: Windows 11",
            "Processor: AMD Ryzen 5-5625U",
            "Graphics: AMD Radeon Graphics",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 144Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 16GB DDR4-3200",
            "Storage: 1TB NVMe SSD",
            "Battery: 43Wh Li-ion battery",
            "Price: ₱49,995",
        ]
    },

    HpVictus15: {
        name: "HP Victus 15-FB0090AX (79J60PA)",
        image:"gaming/HP Victus 15-FB0090AX (79J60PA) GeForce RTX 3050 Ti AMD Ryzen 5 Laptop (Mica Silver).png",
        description: [
            
            "Operating System: Windows 11",
            "Processor: AMD Ryzen 5-5600H",
            "Graphics: NVIDIA GeForce RTX 3050 Ti",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 144Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4-3200",
            "Storage: 512GB NVMe SSD",
            "Battery: 70Wh Li-ion battery",
            "Price: ₱54,990",

        ]
    },
    HpEnvy: {
        name: "Hp ENVY X360 14-FA0070AU (A46S2PA)",
        image:"mainstream/HP ENVY X360 14-FA0070AU (A46S2PA) AMD Ryzen 5 Laptop (Glacier Silver).png",
        description: [

            "Operating System: Windows 11",
            "Processor: AMD Ryzen 5-8640HS",
            "Graphics: AMD Radeon Graphics",
            "Panel Size: 14 inches",
            "Panel Type: IPS",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1200 (WUXGA)",
            "RAM: 16GB LPDDR5-6400 MHz",
            "Storage: 512GB PCIe Gen4 NVMe SSD",
            "Battery: 59Wh Li-ion battery",
            "Price: ₱60,990",

        ]
    },
    LenovoIdeaPadGaming3: {
        name: "Lenovo IdeaPad Gaming 3 15ACH6 82K201DSPH",
        image:"gaming/Lenovo IdeaPad Gaming 3 15ACH6 82K201DSPH.png",
        description: [

            "Operating System: Windows 11",
            "Processor: AMD Ryzen 5-5600H",
            "Graphics: NVIDIA GeForce RTX 3050",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 165Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4-3200",
            "Storage: 512GB SSD M.2 2242 PCIe 3.0x4 NVMe",
            "Battery: 45Wh Li-ion battery",
            "Price: ₱45,995",

        ]
    },
    Hp15: {
        name: "Hp 15-FC0108AU (86J68PA)",
        image:"mainstream/HP 15-FC0108AU (86J68PA) AMD Ryzen 5 Laptop (Natural Silver).png",
        description: [

            "Operating System: Windows 11",
            "Processor: AMD Ryzen 5-7520U",
            "Graphics: AMD Radeon Graphics",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4-3200",
            "Storage: 512GB NVMe SSD",
            "Battery: 41Wh Li-ion battery",
            "Price: ₱30,990",

        ]
    },
    LenovoLegion5: {
        name: "Lenovo Legion 5 (83DG0008PH)",
        image:"gaming/LENOVO Legion 5 (83DG0008PH) GeForce RTX  4070 Intel  Core  i7 Laptop (Luna Grey).png",
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i7-14650HX",
            "Graphics: NVIDIA GeForce RTX 4070",
            "Panel Size: 16 inches",
            "Panel Type: IPS",
            "Refresh Rate: 240Hz",
            "Resolution: 2560 x 1600 (WQXGA)",
            "RAM: 16GB DDR5-5600",
            "Storage: 1TB PCIe 4.0 NVMe SSD",
            "Battery: 80Wh Li-ion battery",
            "Price: ₱125,999",

        ]
    },
    DellNbVostro: {
        name: "Dell NB Vostro 3510",
        image:"mainstream/Dell NB Vostro 3510 i3-1115G4.png",
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i3-1115G4",
            "Graphics: Intel UHD Graphics",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4-2666 MHz",
            "Storage: 256GB NVMe SSD",
            "Battery: 41Wh Li-ion battery",
            "Price: ₱29,995",

        ]
    },
    LenovoLoq15IRX9: {
        name: "Lenovo LOQ 15IRX9 (83DV0013PH)",
        image:"gaming/LENOVO LOQ 15IRX9 (83DV0013PH) GeForce RTX 3050 Intel Core i5 Laptop (Luna Grey).png",
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i5-13450HX",
            "Graphics: NVIDIA GeForce RTX 3050",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 144Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR5-4800",
            "Storage: 512GB SSD M.2 2242 PCIe 4.0x4 NVMe",
            "Battery: 60Wh Li-ion battery",
            "Price: ₱51,999",

        ]
    },
    DellLattitude: {
        name: "Dell Latitude 5550",
        image:"mainstream/Dell Latitude 5550.png",
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i3-1115G4",
            "Graphics: Intel UHD Graphics",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4-3200",
            "Storage: 256GB SSD",
            "Battery: 42Wh Li-ion battery",
            "Price: ₱29,995",

        ]
    },
    MsiCyborg15: {
        name: "MSI Cyborg 15 A13VF-1256PH",
        image:"gaming/MSI Cyborg 15 A13VF-1256PH GeForce RTX 4060 Intel Core i5 Laptop (Translucent Black).png" ,
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i5-13420H",
            "Graphics: NVIDIA GeForce RTX 4060",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 144Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR5-4800",
            "Storage: 512GB NVMe SSD",
            "Battery: 53.5Wh Li-ion battery",
            "Price: ₱54,990",
            
        ]
    },
    DellInspiron15: {
        name: "Dell Inspiron 15 3530-I71355U",
        image:"mainstream/DELL Inspiron 15 3530-I71355U Intel Core i7 Laptop (Platinum Silver).png",
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i7-1355U",
            "Graphics: Intel Iris Xe Graphics",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 120Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 16GB DDR4-3200",
            "Storage: 512GB NVMe SSD",
            "Battery: 54Wh Li-ion battery",
            "Price: ₱63,990",

        ]
    },

    MsiKatanaA15: {
        name: "MSI Katana A15 AI B8VF-404PH",
        image:"gaming/MSI Katana A15 AI B8VF-404PH 16GB(2X8GB DDR5) GeForce RTX  4060 AMD Ryzen  7 Laptop (Black).png",
        description: [

            "Operating System: Windows 11",
            "Processor: AMD Ryzen 7-8845HS",
            "Graphics: NVIDIA GeForce RTX 4060",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 144Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 16GB DDR5-4800",
            "Storage: 512GB NVMe SSD",
            "Battery: 53.5Wh Li-ion battery",
            "Price: ₱68,995",

        ]
    },
    AsusZenBook14: {
        name: "Asus Zenbook 14 UX3405MA-PP678WSM",
        image:"mainstream/ASUS Zenbook 14 UX3405MA-PP678WSM Intel  Core Ultra 5 Laptop (Ponder Blue) + Microsoft 365 Basic.png",
        description: [

            "Operating System: Windows 11 Home",
            "Processor: Intel Core Ultra 5 125H",
            "Graphics: Intel Arc Graphics",
            "Panel Size: 14 inches",
            "Panel Type: OLED",
            "Refresh Rate: 120Hz",
            "Resolution: 2880 x 1800 (3K)",
            "RAM: 16GB LPDDR5X",
            "Storage: 1TB M.2 NVMe PCIe 4.0 SSD",
            "Battery: 75Wh Li-ion battery",
            "Price: ₱68,999",

        ]
    },
    MsiVector16: {
        name: "MSI Vector 16 HX A14VFG-406PH",
        image:"gaming/MSI Vector 16 HX A14VFG-406PH GeForce RTX 4060 Intel Core i7 Laptop (Cosmos Gray).png",
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i7-14700HX",
            "Graphics: NVIDIA GeForce RTX 4060",
            "Panel Size: 16 inches",
            "Panel Type: IPS",
            "Refresh Rate: 240Hz",
            "Resolution: 2560 x 1600 (QHD+)",
            "RAM: 16GB DDR5-5600",
            "Storage: 1TB NVMe SSD",
            "Battery: 70Wh Li-ion battery",
            "Price: ₱97,995",

        ]
    },
    AsusVivobook16: {
        name: "Asus Vivobook Pro 16X OLED (K6604)",
        image:"mainstream/ASUS Vivobook Pro 16X OLED (K6604).jpg",
        description: [

            "Operating System: Windows 11 Home",
            "Processor: Intel Core i9-13980HX",
            "Graphics: NVIDIA GeForce RTX 4070",
            "Panel Size: 16 inches",
            "Panel Type: OLED",
            "Refresh Rate: 120Hz",
            "Resolution: 3200 x 2000 (3.2K)",
            "RAM: 32GB DDR5",
            "Storage: 1TB M.2 NVMe PCIe 4.0 SSD",
            "Battery: 90Wh Li-ion battery",
            "Price: ₱89,999",

        ]
    },
    AcerNitroVAnv15: {
        name: "Acer Nitro V ANV15-41-R2M0",
        image:"gaming/Acer Nitro V ANV15-41-R2M0 OPI Obsidian Black.png",
        description: [

            "Operating System: Windows 11 Home",
            "Processor: AMD Ryzen 5-7535HS",
            "Graphics: NVIDIA GeForce RTX 2050",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 144Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR5",
            "Storage: 512GB NVMe SSD",
            "Battery: 57Wh Li-ion battery",
            "Price: ₱43,999",

        ]
    },
    AcerAspireA514: {
        name: "Acer Aspire A514-55-330C",
        image:"mainstream/ACER Aspire A514-55-330C Intel Core i3 Laptop (Steel Gray).png" ,
        description: [

            "Operating System: Windows 11 Home",
            "Processor: Intel Core i3-1215U",
            "Graphics: Intel UHD Graphics",
            "Panel Size: 14 inches",
            "Panel Type: IPS",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4-3200",
            "Storage: 512GB NVMe SSD",
            "Battery: 41Wh Li-ion battery",
            "Price: ₱29,999",

        ]
    },
    AcerNitro5: {
        name: "Acer Nitro 5 AN515L-57-79TD",
        image:"gaming/Acer Nitro 5 AN515L-57-79TD.png",
        description: [

            "Operating System: Windows 11 Home",
            "Processor: Intel Core i7-11800H",
            "Graphics: NVIDIA GeForce RTX 3050 Ti",
            "Panel Size: 15.6 inches",
            "Panel Type: IPS",
            "Refresh Rate: 144Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 8GB DDR4-3200",
            "Storage: 512GB NVMe SSD",
            "Battery: 58Wh Li-ion battery",
            "Price: ₱59,999",

        ]
    },
    AcerSwiftGo14: {
        name: "Acer Swift Go 14 EVO SFG14-73-529P",
        image:"mainstream/ACER Swift Go 14 EVO SFG14-73-529P Intel Core Ultra 5 Laptop (Pure Silver).png",
        description: [

            "Operating System: Windows 11 Home",
            "Processor: Intel Core Ultra 5-125H",
            "Graphics: Intel Arc Graphics",
            "Panel Size: 14 inches",
            "Panel Type: OLED",
            "Refresh Rate: 120Hz",
            "Resolution: 2880 x 1800 (3K)",
            "RAM: 16GB LPDDR5X",
            "Storage: 512GB NVMe SSD",
            "Battery: 65Wh Li-ion battery",
            "Price: ₱50,999",

        ]
    },
    MsiCrosshair17: {
        name: "MSI Crosshair 17 B12UGZ-298XTR",
        image:"gaming/MSI Crosshair 17 B12UGZ-298XTR i7-12700H 16 GB 1 TB SSD RTX3070 17.3.jpg" ,
        description: [

            "Operating System: Windows 11",
            "Processor: Intel Core i7-12700H",
            "Graphics: NVIDIA GeForce RTX 3070",
            "Panel Size: 17.3 inches",
            "Panel Type: IPS",
            "Refresh Rate: 360Hz",
            "Resolution: 1920 x 1080 (Full HD)",
            "RAM: 16GB DDR5-4800",
            "Storage: 1TB NVMe SSD",
            "Battery: 53.5Wh Li-ion battery",
            "Price: ₱89,999",

        ]
    },
    AcerAl14    : {
        name: "Acer AL14-31-35XW",
        image:"mainstream/Acer AL14-31-35XW Pure Silver.png",
        description: [

            "Operating System: Windows 11 Home",
            "Processor: Intel Core i3-N300",
            "Graphics: Intel UHD Graphics",
            "Panel Size: 14 inches",
            "Panel Type: IPS",
            "Refresh Rate: 60Hz",
            "Resolution: 1920 x 1200 (WUXGA)",
            "RAM: 8GB LPDDR5 4800MHz",
            "Storage: 512GB NVMe SSD",
            "Battery: 45.6Wh Li-ion battery",
            "Price: ₱24,999",
            
        ]
    },

};

// Function for opening the pop-up window
function showPopup(laptopId) {
    const laptop = laptops[laptopId];
    document.getElementById('popup-name').innerText = laptop.name;
    document.getElementById('popup-image').src = laptop.image;
    
    // Clear previous list items
    const descriptionList = document.getElementById('popup-description');
    descriptionList.innerHTML = '';

    // Populate the list with description items
    laptop.description.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = item;
        descriptionList.appendChild(listItem);
    });

    document.getElementById('popup').style.display = 'flex';
}

// Function for closing the pop-up window
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


// Function for the search and Filter
function filterLaptops() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); //Gets the value of the search input field

    const brandFilter = document.getElementById('brandFilter').value.toLowerCase(); //Gets the value of the brand filter dropdown

    const processorFilter = document.getElementById('processorFilter').value.toLowerCase(); //Gets the value of the processor filter dropdown 

    const storageFilter = document.getElementById('storageFilter').value.toLowerCase(); //Gets the value of the storage filter dropdown

    const storageTypeFilter = document.getElementById('storageTypeFilter').value.toLowerCase(); //Gets the value of the storage type filter dropdown

    const ramFilter = document.getElementById('ramFilter').value.toLowerCase(); //Gets the value of the ram filter dropdown

    const ramTypeFilter = document.getElementById('ramTypeFilter').value.toLowerCase(); //Gets the value of the ram type filter dropdown

    const priceFilter = document.getElementById('priceFilter').value.toLowerCase(); //Gets the value of the price filter dropdown


    const laptops = document.querySelectorAll('.laptopContainer .laptop'); //Gets all laptop elements

    laptops.forEach(laptop => {
        
        const laptopName = laptop.querySelector('h4').innerText.toLowerCase(); //Gets the name of the laptop

        const laptopBrand = laptop.getAttribute('data-brand').toLowerCase(); // Assuming you have a data attribute for brand

        const laptopProcessor = laptop.getAttribute('data-processor').toLowerCase(); // Assuming you have a data attribute for  processor

        const laptopStorage = laptop.getAttribute('data-storage').toLowerCase(); // Assuming you have a data attribute for storage

        const laptopStorageType = laptop.getAttribute('data-storage-type').toLowerCase(); // Assuming you have a data attribute for storage type

        const laptopRam = laptop.getAttribute('data-ram').toLowerCase(); // Assuming you have a data attribute for ram

        const laptopRamType = laptop.getAttribute('data-ram-type').toLowerCase(); // Assuming you have a data attribute for ram type

        const laptopPrice = laptop.getAttribute('data-price').toLowerCase(); // Assuming you have a data attribute for price


        // check if the value of each element matches
        const matchesSearch = laptopName.includes(searchInput); // Checks if the laptop name includes the search input

        const matchesBrand = brandFilter === '' || laptopBrand === brandFilter; // Checks if the laptop brand matches the selected brand filter

        const matchesProcessor = processorFilter === '' || laptopProcessor === processorFilter; // Checks if the laptop processor matches the selected processor filter

        const matchesStorage = storageFilter === '' || laptopStorage === storageFilter; // Checks if the laptop storage matches the selected storage filter

        const matchesStorageType = storageTypeFilter === '' || laptopStorageType === storageTypeFilter; // Checks if the laptop storage type matches the selected storage type filter

        const matchesRam = ramFilter === '' || laptopRam === ramFilter; // Checks if the laptop ram matches the selected ram filter

        const matchesRamType = ramTypeFilter === '' || laptopRamType === ramTypeFilter; // Checks if the laptop ram type matches the selected ram type filter

        const matchesPrice = priceFilter === '' || laptopPrice === priceFilter; // Checks if the laptop price matches the selected price filter

        if (matchesSearch &&  matchesBrand && matchesProcessor && matchesStorage && matchesStorageType && matchesRam && matchesRamType && matchesPrice) {
            laptop.style.display = 'block'; // Show the laptop
        } else {
            laptop.style.display = 'none'; // Hide the laptop
        }
    });
}



