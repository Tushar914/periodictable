//Object that saves all the properties of all the elements
var elements = {
    hydrogen: {"m_point": 14.01, "b_point": 20.28, "density": 0.0899, "valence": 1, "radius": 53, "eneg": 2.2, "affinity": 72.8, "heat": 14300},
    helium: {"m_point": 0, "b_point": 4.22, "density": 0.1785, "valence": 0, "radius": 31, "eneg": "N/A", "affinity": 0, "heat": 5193},
    lithium: {"m_point": 453.69, "b_point": 1615, "density": 535, "valence": 1, "radius": 167, "eneg": 0.98, "affinity": 59.6, "heat": 3570},
    beryllium: {"m_point": 1560, "b_point": 2743, "density": 1848, "valence": 2, "radius": 112, "eneg": 1.57, "affinity": 0, "heat": 1820},
    boron: {"m_point": 2348, "b_point": 4273, "density": 2460, "valence": 3, "radius": 87, "eneg": 2.04, "affinity": 26.7, "heat": 1030},
    carbon: {"m_point": 3843, "b_point": 4300, "density": 2260, "valence": 4, "radius": 67, "eneg": 2.55, "affinity": 153.9, "heat": 710},
    nitrogen: {"m_point": 63.05, "b_point": 77.36, "density": 1.251, "valence": 5, "radius": 56, "eneg": 3.05, "affinity": 7, "heat": 1040},
    oxygen: {"m_point": 54.8, "b_point": 90.2, "density": 1.429, "valence": 2, "radius": 48, "eneg": 3.44, "affinity": 141, "heat": 919},
    fluorine: {"m_point": 53.5, "b_point": 85.03, "density": 1.696, "valence": 1, "radius": 42, "eneg": 3.98, "affinity": 328, "heat": 824},
    neon: {"m_point": 24.56, "b_point": 27.07, "density": 0.9, "valence": 0, "radius": 38, "eneg": "N/A", "affinity": 0, "heat": 1030},
    sodium: {"m_point": 370.87, "b_point": 1156, "density": 968, "valence": 1, "radius": 190, "eneg": 0.93, "affinity": 52.8, "heat": 1230},
    magnesium: {"m_point": 923, "b_point": 1363, "density": 1738, "valence": 2, "radius": 145, "eneg": 1.31, "affinity": 0, "heat": 1020},
    aluminium: {"m_point": 933, "b_point": 2792, "density": 2700, "valence": 3, "radius": 118, "eneg": 1.61, "affinity": 42.5, "heat": 904},
    silicon: {"m_point": 1687, "b_point": 3163, "density": 2330, "valence": 4, "radius": 111, "eneg": 1.9, "affinity": 133.6, "heat": 710},
    phosphorus: {"m_point": 317.3, "b_point": 553.6, "density": 1823, "valence": 5, "radius": 98, "eneg": 2.19, "affinity": 72, "heat": 769},
    sulfur: {"m_point": 388.36, "b_point": 717.86, "density": 1960, "valence": 6, "radius": 88, "eneg": 2.58, "affinity": 200, "heat": 705},
    chlorine: {"m_point": 171.6, "b_point": 239.11, "density": 3.214, "valence": 7, "radius": 79, "eneg": 3.16, "affinity": 349, "heat": 478},
    argon: {"m_point": 83.8, "b_point": 87.3, "density": 1.784, "valence": 2, "radius": 71, "eneg": "N/A", "affinity": 0, "heat": 520},
    potassium: {"m_point": 336.53, "b_point": 1032, "density": 856, "valence": 1, "radius": 243, "eneg": 0.82, "affinity": 48.4, "heat": 757},
    calcium: {"m_point": 1115, "b_point": 1757, "density": 1550, "valence": 2, "radius": 194, "eneg": 1, "affinity": 2.37, "heat": 631},
    scandium: {"m_point": 1814, "b_point": 3103, "density": 2985, "valence": 3, "radius": 184, "eneg": 1.36, "affinity": 18.1, "heat": 567},
    titanium: {"m_point": 1941, "b_point": 3560, "density": 4507, "valence": 4, "radius": 176, "eneg": 1.54, "affinity": 7.6, "heat": 520},
    vanadium: {"m_point": 2183, "b_point": 3680, "density": 6110, "valence": 5, "radius": 171, "eneg": 1.63, "affinity": 50.6, "heat": 489},
    chromium: {"m_point": 2180, "b_point": 2944, "density": 7140, "valence": 6, "radius": 166, "eneg": 1.66, "affinity": 64.3, "heat": 448},
    manganese: {"m_point": 1519, "b_point": 2334, "density": 7470, "valence": 7, "radius": 161, "eneg": 1.55, "affinity": 0, "heat": 479},
    iron: {"m_point": 1811, "b_point": 3134, "density": 7874, "valence": 6, "radius": 156, "eneg": 1.83, "affinity": 15.7, "heat": 449},
    cobalt: {"m_point": 1768, "b_point": 3200, "density": 8900, "valence": 5, "radius": 152, "eneg": 1.88, "affinity": 63.7, "heat": 421},
    nickel: {"m_point": 1728, "b_point": 3186, "density": 8908, "valence": 4, "radius": 149, "eneg": 1.91, "affinity": 112, "heat": 445},
    copper: {"m_point": 1357.77, "b_point": 3200, "density": 8920, "valence": 4, "radius": 145, "eneg": 1.9, "affinity": 118.4, "heat": 384},
    zinc: {"m_point": 692.68, "b_point": 1180, "density": 7140, "valence": 2, "radius": 142, "eneg": 1.65, "affinity": 0, "heat": 388},
    gallium: {"m_point": 302.91, "b_point": 2477, "density": 5904, "valence": 3, "radius": 136, "eneg": 1.81, "affinity": 28.9, "heat": 371},
    germanium: {"m_point": 1211.4, "b_point": 3093, "density": 5323, "valence": 4, "radius": 125, "eneg": 2.01, "affinity": 119, "heat": 321},
    arsenic: {"m_point": 1090, "b_point": 887, "density": 5727, "valence": 5, "radius": 114, "eneg": 2.18, "affinity": 78, "heat": 328},
    selenium: {"m_point": 494, "b_point": 958, "density": 4819, "valence": 6, "radius": 103, "eneg": 2.55, "affinity": 195, "heat": 321},
    bromine: {"m_point": 265.8, "b_point": 332, "density": 3120, "valence": 7, "radius": 94, "eneg": 2.96, "affinity": 324.6, "heat": 947},
    krypton: {"m_point": 115.79, "b_point": 119.93, "density": 3.75, "valence": 2, "radius": 88, "eneg": 3, "affinity": 0, "heat": 248},
    rubidium: {"m_point": 312.46, "b_point": 961, "density": 1532, "valence": 1, "radius": 265, "eneg": 0.82, "affinity": 46.9, "heat": 364},
    strontium: {"m_point": 1050, "b_point": 1655, "density": 2630, "valence": 2, "radius": 219, "eneg": 0.95, "affinity": 5.03, "heat": 300},
    yttrium: {"m_point": 1799, "b_point": 3618, "density": 4472, "valence": 3, "radius": 212, "eneg": 1.22, "affinity": 29.6, "heat": 298},
    zirconium: {"m_point": 2128, "b_point": 4682, "density": 6511, "valence": 4, "radius": 206, "eneg": 1.33, "affinity": 41.1, "heat": 278},
    niobium: {"m_point": 2750, "b_point": 5017, "density": 8570, "valence": 5, "radius": 198, "eneg": 1.6, "affinity": 86.1, "heat": 265},
    molybdenum: {"m_point": 2896, "b_point": 4912, "density": 10280, "valence": 6, "radius": 190, "eneg": 2.16, "affinity": 71.9, "heat": 251},
    technitium: {"m_point": 2430, "b_point": 4538, "density": 11500, "valence": 7, "radius": 183, "eneg": 1.9, "affinity": 53, "heat": 63},
    ruthenium: {"m_point": 2607, "b_point": 4423, "density": 12370, "valence": 8, "radius": 178, "eneg": 2.2, "affinity": 101.3, "heat": 238},
    rhodium: {"m_point": 2237, "b_point": 3968, "density": 12450, "valence": 6, "radius": 173, "eneg": 2.28, "affinity": 109.7, "heat": 240},
    palladium: {"m_point": 1828.05, "b_point": 3236, "density": 12023, "valence": 4, "radius": 169, "eneg": 2.2, "affinity": 53.7, "heat": 240},
    silver: {"m_point": 1234.93, "b_point": 2435, "density": 10490, "valence": 4, "radius": 165, "eneg": 1.93, "affinity": 125.6, "heat": 235},
    cadmium: {"m_point": 594.22, "b_point": 1040, "density": 8650, "valence": 2, "radius": 161, "eneg": 1.69, "affinity": 0, "heat": 230},
    indium: {"m_point": 429.75, "b_point": 2345, "density": 7310, "valence": 3, "radius": 156, "eneg": 1.78, "affinity": 28.9, "heat": 233},
    tin: {"m_point": 505.08, "b_point": 2875, "density": 7310, "valence": 4, "radius": 145, "eneg": 1.96, "affinity": 107.3, "heat": 217},
    antimony: {"m_point": 903.78, "b_point": 1860, "density": 6697, "valence": 5, "radius": 133, "eneg": 2.05, "affinity": 103.2, "heat": 207},
    tellurium: {"m_point": 722.66, "b_point": 1261, "density": 6240, "valence": 6, "radius": 123, "eneg": 2.1, "affinity": 190.2, "heat": 201},
    iodine: {"m_point": 386.85, "b_point": 457.4, "density": 4940, "valence": 7, "radius": 115, "eneg": 2.66, "affinity": 295.2, "heat": 429},
    xenon: {"m_point": 161.3, "b_point": 165.1, "density": 5.9, "valence": 8, "radius": 108, "eneg": 2.6, "affinity": 0, "heat": 158},
    cesium: {"m_point": 301.59, "b_point": 944, "density": 1879, "valence": 1, "radius": 298, "eneg": 0.79, "affinity": 45.5, "heat": 242},
    barium: {"m_point": 1000, "b_point": 2143, "density": 3510, "valence": 2, "radius": 253, "eneg": 0.89, "affinity": 13.95, "heat": 205},
    hafnium: {"m_point": 2506, "b_point": 4876, "density": 13310, "valence": 4, "radius": 208, "eneg": 1.3, "affinity": 0, "heat": 144},
    tantalum: {"m_point": 3290, "b_point": 5731, "density": 16650, "valence": 5, "radius": 200, "eneg": 1.5, "affinity": 31, "heat": 140},
    tungsten: {"m_point": 3695, "b_point": 5828, "density": 19250, "valence": 6, "radius": 193, "eneg": 2.36, "affinity": 78.6, "heat": 132},
    rhenium: {"m_point": 3459, "b_point": 5869, "density": 21020, "valence": 7, "radius": 188, "eneg": 1.9, "affinity": 14.5, "heat": 137},
    osmium: {"m_point": 3306, "b_point": 5285, "density": 22610, "valence": 8, "radius": 185, "eneg": 2.2, "affinity": 106.1, "heat": 130},
    iridium: {"m_point": 2739, "b_point": 4701, "density": 22650, "valence": 8, "radius": 180, "eneg": 2.2, "affinity": 151, "heat": 131},
    platinum: {"m_point": 2041.4, "b_point": 4098, "density": 21090, "valence": 6, "radius": 177, "eneg": 2.28, "affinity": 205.3, "heat": 133},
    gold: {"m_point": 1337.33, "b_point": 3129, "density": 19300, "valence": 5, "radius": 174, "eneg": 2.54, "affinity": 222.8, "heat": 129},
    mercury: {"m_point": 234.32, "b_point": 629.88, "density": 13534, "valence": 4, "radius": 171, "eneg": 2, "affinity": 0, "heat": 139},
    thalium: {"m_point": 577, "b_point": 1746, "density": 11850, "valence": 3, "radius": 156, "eneg": 1.62, "affinity": 19.2, "heat": 129},
    lead: {"m_point": 600.61, "b_point": 2022, "density": 11340, "valence": 4, "radius": 154, "eneg": 2.33, "affinity": 35.1, "heat": 127},
    bismuth: {"m_point": 544.4, "b_point": 1837, "density": 9780, "valence": 5, "radius": 143, "eneg": 2.02, "affinity": 91.2, "heat": 122},
    polonium: {"m_point": 527, "b_point": 1235, "density": 9196, "valence": 6, "radius": 135, "eneg": 2, "affinity": 183.3, "heat": "N/A"},
    astatine: {"m_point": 575, "b_point": 610, "density": "N/A" , "valence": 7, "radius": 127, "eneg": 2.2, "affinity": 270.1, "heat": "N/A"},
    radon: {"m_point": 202, "b_point": 211.3, "density": 9.73, "valence": 6, "radius": 120, "eneg": "N/A", "affinity": 0, "heat": 93},
    francium: {"m_point": 300, "b_point": 950, "density": "N/A", "valence": 1, "radius": "N/A", "eneg": 0.7, "affinity": "N/A", "heat": "N/A"}, 
    radium: {"m_point": 973, "b_point": 2010, "density": 5000, "valence": 2, "radius": "N/A", "eneg": 0.9, "affinity": "N/A", "heat": 92},
    rutherfordium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": 4, "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    dubnium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": 5, "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    seaborgium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": 6, "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    bohrium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": 7, "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    hassium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": 8, "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    meitnerium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    darmstadtium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    roentgenium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    copernicium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    ununtrium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    flerovium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    ununpentium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    livemorium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    ununseptium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    ununoctium: {"m_point": "N/A", "b_point": "N/A", "density": "N/A", "valence": "N/A", "radius": "N/A", "eneg": "N/A", "affinity": "N/A", "heat": "N/A"},
    lanthanum: {"m_point": 1193, "b_point": 3737, "density": 6146, "valence": 3, "radius": "N/A", "eneg": 1.1, "affinity": 48, "heat": 195},
    cerium: {"m_point": 1071, "b_point": 3633, "density": 6689, "valence": 4, "radius": "N/A", "eneg": 1.12, "affinity": 50, "heat": 192},
    praseodymium: {"m_point": 1204, "b_point": 3563, "density": 6640, "valence": 4, "radius": "N/A", "eneg": 1.13, "affinity": 50, "heat": 193},
    neodymium: {"m_point": 1294, "b_point": 3373, "density": 7010, "valence": 3, "radius": "N/A", "eneg": 1.14, "affinity": 50, "heat": 190},
    promethium: {"m_point": 1373, "b_point": 3273, "density": 7264, "valence": 3, "radius": "N/A", "eneg": "N/A", "affinity": 50, "heat": "N/A"},
    samarium: {"m_point": 1345, "b_point": 2076, "density": 7353, "valence": 3, "radius": "N/A", "eneg": 1.17, "affinity": 50, "heat": 196},
    europium: {"m_point": 1095, "b_point": 1800, "density": 5244, "valence": 3, "radius": "N/A", "eneg": "N/A", "affinity": 50, "heat": 182},
    gadolinium: {"m_point": 1586, "b_point": 3523, "density": 7901, "valence": 3, "radius": "N/A", "eneg": 1.2, "affinity": 50, "heat": 240},
    terbium: {"m_point": 1629, "b_point": 3503, "density": 8219, "valence": 4, "radius": "N/A", "eneg": "N/A", "affinity": 50, "heat": 182},
    dysprosium: {"m_point": 1685, "b_point": 2840, "density": 8551, "valence": 3, "radius": "N/A", "eneg": 1.22, "affinity": 50, "heat": 167},
    holmium: {"m_point": 1747, "b_point": 2973, "density": 8795, "valence": 3, "radius": "N/A", "eneg": 1.23, "affinity": 50, "heat": 165},
    erbium: {"m_point": 1770, "b_point": 3141, "density": 9066, "valence": 4, "radius": "N/A", "eneg": 1.24, "affinity": 50, "heat": 168},
    thulium: {"m_point": 1818, "b_point": 2223, "density": 9321, "valence": 3, "radius": "N/A", "eneg": 1.25, "affinity": 50, "heat": 160},
    ytterbium: {"m_point": 1092, "b_point": 1469, "density": 6570, "valence": 3, "radius": "N/A", "eneg": "N/A", "affinity": 50, "heat": 154},
    lutetium: {"m_point": 1936, "b_point": 3675, "density": 9841, "valence": 3, "radius": "N/A", "eneg": 1.27, "affinity": 50, "heat": 154},
    actinium: {"m_point": 1323, "b_point": 3473, "density": 10070, "valence": 3, "radius": "N/A", "eneg": 1.1, "affinity": "N/A", "heat": 120},
    thorium: {"m_point": 2023, "b_point": 5093, "density": 11724, "valence": 4, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": 118},
    protactinium: {"m_point": 1845, "b_point": 4573, "density": 15370, "valence": 5, "radius": "N/A", "eneg": 1.5, "affinity": "N/A", "heat": 99},
    uranium: {"m_point": 1408, "b_point": 4200, "density": 19050, "valence": 6, "radius": "N/A", "eneg": 1.38, "affinity": "N/A", "heat": 116},
    neptunium: {"m_point": 917, "b_point": 4273, "density": 20450, "valence": 7, "radius": "N/A", "eneg": 1.36, "affinity": "N/A", "heat": "N/A"},
    plutonium: {"m_point": 913, "b_point": 3503, "density": 19816, "valence": 8, "radius": "N/A", "eneg": 1.28, "affinity": "N/A", "heat": "N/A"},
    americium: {"m_point": 1449, "b_point": 2284, "density": "N/A", "valence": 6, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"},
    curium: {"m_point": 1618, "b_point": 3383, "density": 13510, "valence": 4, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"},
    berkilium: {"m_point": 1323, "b_point": "N/A", "density": 14780, "valence": 4, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"},
    californium: {"m_point": 1173, "b_point": "N/A", "density": 15100, "valence": 4, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"},
    einsteinium: {"m_point": 1133, "b_point": "N/A", "density": "N/A", "valence": 3, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"},
    fermium: {"m_point": 1800, "b_point": "N/A", "density": "N/A", "valence": 3, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"},
    mendelevium: {"m_point": 1100, "b_point": "N/A", "density": "N/A", "valence": 3, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"},
    nobelium: {"m_point": 1100, "b_point": "N/A", "density": "N/A", "valence": 3, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"},
    lawrencium: {"m_point": 1900, "b_point": "N/A", "density": "N/A", "valence": 3, "radius": "N/A", "eneg": 1.3, "affinity": "N/A", "heat": "N/A"}
};

//Syntax to register a new tag for HTML
var newDiv= document.registerElement('new-div');
var newP = document.registerElement('new-p');

//This function enables the Welcome Screen Overlay
function WelcomeScreen()
{
    if ($.cookie('noShowWelcome'))
    { 
        $('.welcomeScreen').hide();
    }
    else 
    {
        $('.welcomeButton').click(function() 
        {
            $.cookie('noShowWelcome', true);
            $('.welcomeScreen').toggle('slide');
            $('new-div').hide();    
        });
    }
}

//Lanthanoids() stylizes the Lanthanoids group elements to be aligned in one column
function Lanthanoids()
{
    var $elements1 = $('.lanthanoids');
    var i, marginLeft = -70;

    for(i=0; i<$elements1.length; i++)
    {
        marginLeft += parseInt(window.getComputedStyle($elements1[i]).marginLeft) + 70;
        $elements1[i].style.marginLeft = marginLeft + 'px';
    }
}

//actinoids() stylizes the Actinoids group elements to be aligned in one column
function Actinoids()
{
	var $elements2 = $('.actinoids');
	var i, marginLeft = -70;

	for(i=0; i<$elements2.length; i++)
	{
        marginLeft += parseInt(window.getComputedStyle($elements2[i]).marginLeft) + 70; 
        $elements2[i].style.marginLeft = marginLeft + 'px';
    }
}

//This functions controls the Group hover function
function TypesHover()
{
    //When elements with '.info' are hovered then following function is called
    $('.info').hover(
        function() 
        {
            getId = this.id;
            originalColor = document.getElementById(getId).style.backgroundColor;
            originalAll = document.querySelector('div').style.backgroundColor;
        //switch checks the id to determine which elements color needs to be set to #d3d3d3 and which should not be affected
        switch(getId)
        {
            case "alkali_metals":
            $(".info:not(#lithium, #sodium, #potassium, #rubidium, #cesium, #francium, .types)").css("background-color", "D3D3D3");
            break;

            case "alkaline_earth_metals":
            $(".info:not(#beryllium, #magnesium, #calcium, #strontium, #barium, #radium, .types)").css("background-color", "D3D3D3");
            break;

            case "transition_metals":
            $(".info:not(#scandium, #titanium, #vanadium, #chromium, #manganese, #iron, #cobalt, #nickel, #copper, #zinc, #yttrium, #zirconium, \
                #niobium, #molybdenum, #technitium, #ruthenium, #rhodium, #palladium, #silver, #cadmium, #hafnium, #tantalum, #tungsten, \
                #rhenium, #osmium, #iridium, #platinum, #gold, #mercury, #rutherfordium, #dubnium, #seaborgium, #bohrium, #hassium, #meitnerium, \
                #darmstadtium, #roentgenium, #copernicium, .types)").css("background-color", "D3D3D3");
            break;

            case "post_transition_metals":
            $(".info:not(#aluminium, #gallium, #indium, #tin, #thalium, #lead, #bismuth, #ununtrium, #flerovium, \
                #ununpentium, #livemorium, .types)").css("background-color", "D3D3D3");
            break;

            case "lanths":
            $(".info:not(#lanthanum, #cerium, #praseodymium, #neodymium, #promethium, #samarium, #europium, #gadolinium, #terbium, #dysprosium, \
                #holmium, #erbium, #thulium, #ytterbium, #lutetium, #lanths_space, .types)").css("background-color", "D3D3D3");
            break;

            case "acts":
            $(".info:not(#actinium, #thorium, #protactinium, #uranium, #neptunium, #plutonium, #americium, #curium, #berkilium, #californium, \
                #einsteinium, #fermium, #mendelevium, #nobelium, #lawrencium, #acts_space, .types)").css("background-color", "D3D3D3");
            break;

            case "other_non_metals":
            $(".info:not(#hydrogen, #carbon, #nitrogen, #oxygen, #phosphorus, #sulfur, #selenium, .types)").css("background-color", "D3D3D3");
            break;

            case "halogens":
            $(".info:not(#fluorine, #chlorine, #bromine, #iodine, #astatine, #ununseptium, .types)").css("background-color", "D3D3D3");
            break;

            case "noble_gases":
            $(".info:not(#helium, #neon, #argon, #krypton, #xenon, #radon, #ununoctium, .types)").css("background-color", "D3D3D3");
            break;

            case "metalloids":
            $(".info:not(#boron, #silicon, #germanium, #arsenic, #antimony, #tellurium, #polonium, .types)").css("background-color", "D3D3D3");
            break;

            default:
            $(".info").css("background-color", originalAll);
        }
    },
    function() 
    {
        document.getElementById(getId).style.backgroundColor = originalColor;
        // document.querySelector('div').style.backgroundColor = originalAll;
        $(".info").css("background-color", originalAll);
    });
}

//This function allows in displaying the div with atomic mass
function ElementsHoverInfo()
{
    //On hover the display will be set to inline, i.e. it will be visible else not
    $('.info').hover(
        function() 
        {
            var getId = this.id;
            getInfoId = "#info" + getId.charAt(0).toUpperCase() + getId.slice(1);
            $(getInfoId).css("display", "inline");
            $('#infoElements').css("display", "none");
        },
        function() 
        {
            $(getInfoId).css("display", "none");
            $('#infoElements').css("display", "inline");
        });
}

//The PropElements() shows the values in the Properties table
function PropElements()
{
    //On hover, it picks up the value and displays it at the specified id location using html()
    $('.tempElements').hover(function() 
    {
        $('#mPoint').html(elements[this.id].m_point + " K");
        $('#bPoint').html(elements[this.id].b_point + " K");
        $('#density').html(elements[this.id].density + " kg/m\u00B3");
        $('#valence').html(elements[this.id].valence);
        $('#radius').html(elements[this.id].radius + " ppm");
        $("#enivity").html(elements[this.id].eneg);
        $("#affinity").html(elements[this.id].affinity + " kJ/mol");
        $("#heat").html(elements[this.id].heat + " J/kgK");
    },
    function()
    {
        $('#mPoint').html('');
        $('#bPoint').html('');
        $('#density').html('');
        $('#valence').html('');
        $('#radius').html('');
        $("#enivity").html('');
        $("#affinity").html('');
        $("#heat").html('');
    });
}

//This function is used by the Temperature Slider
function Slider()
{
    temperature = 0;
    var $element= $('.tempElements'),
    $inputSlider = $('#temperature');

    $inputSlider.on("input", function() 
    {

        temperature = $(this).val();
        //Conversion of temperature from Kelvin to Celcius and Fahrenhreit
        $('#kelvinTemp').html(temperature + "°K");
        $('#celciusTemp').html(Math.round(temperature - 273.15) + "°C");
        $('#fahrenheitTemp').html(Math.round(temperature*9/5 - 459.7) + "°F");
        //Comparison of Boiling Point and Melting Point with the current temperature for each element
        $.each($element, function ( key, value ) 
        {
            var id = value.id;

            if (temperature >= elements[id].b_point) 
            {
                value.style.backgroundColor = "#ff6666";
            } 
            else if (temperature >= elements[id].m_point) 
            {
                value.style.backgroundColor = "#66b2ff";
            }
            else   
            {
                value.style.backgroundColor = "#8b8b8b";
            }
        });
    });
}

//Shows the Radius trend across the table by comparing values with pre-specified values and altering colors based on that
function RadiusColor()
{
    var $radiusElements = $('.tempElements');
    $('#radTitle').click(function()
    {
        $.each($radiusElements, function ( key, value )
        {
            var id = value.id;
            if(elements[id].radius >= 0 && elements[id].radius <= 30)
            {
                value.style.backgroundColor = "#e6ffe6";
            }
            else if(elements[id].radius >= 31 && elements[id].radius <= 60)
            {
                value.style.backgroundColor = "#ccffcc";
            }
            else if(elements[id].radius >= 61 && elements[id].radius <= 90)
            {
                value.style.backgroundColor = "#99ff99";
            }
            else if(elements[id].radius >= 91 && elements[id].radius <= 120)
            {
                value.style.backgroundColor = "#80ff80";
            }
            else if(elements[id].radius >= 121 && elements[id].radius <= 150)
            {
                value.style.backgroundColor = "#66ff66";
            }
            else if(elements[id].radius >= 151 && elements[id].radius <= 180)
            {
                value.style.backgroundColor = "#4dff4d";
            }
            else if(elements[id].radius >= 181 && elements[id].radius <= 210)
            {
                value.style.backgroundColor = "#1aff1a";
            }
            else if(elements[id].radius >= 211 && elements[id].radius <= 240)
            {
                value.style.backgroundColor = "#00b300";
            }
            else if(elements[id].radius >= 241 && elements[id].radius <= 297)
            {
                value.style.backgroundColor = "#009900";
            }
            else if(elements[id].radius == 298)
            {
                value.style.backgroundColor = "#006600";
            }
            else
            {
                value.style.backgroundColor = "white";
            }
        });
    });
}

//Shows the Melting Point trend across the table by comparing values with pre-specified values and altering colors based on that
function MeltingPointColor()
{
    var $meltingElements = $('.tempElements');
    $('#mpTitle').click(function()
    {
        $.each($meltingElements, function ( key, value )
        {
            var id = value.id;
            if(elements[id].m_point >= 0 && elements[id].m_point <= 400)
            {
                value.style.backgroundColor = "#e6f2ff";
            }
            else if(elements[id].m_point >= 401 && elements[id].m_point <= 800)
            {
                value.style.backgroundColor = "#cce5ff";
            }
            else if(elements[id].m_point >= 801 && elements[id].m_point <= 1200)
            {
                value.style.backgroundColor = "#b3d7ff";
            }
            else if(elements[id].m_point >= 1201 && elements[id].m_point <= 1600)
            {
                value.style.backgroundColor = "#99caff";
            }
            else if(elements[id].m_point >= 1601 && elements[id].m_point <= 2000)
            {
                value.style.backgroundColor = "#80bdff";
            }
            else if(elements[id].m_point >= 2001 && elements[id].m_point <= 2400)
            {
                value.style.backgroundColor = "#66b0ff";
            }
            else if(elements[id].m_point >= 2401 && elements[id].m_point <= 2800)
            {
                value.style.backgroundColor = "#3396ff";
            }
            else if(elements[id].m_point >= 2801 && elements[id].m_point <= 3200)
            {
                value.style.backgroundColor = "#007bff";
            }
            else if(elements[id].m_point >= 3201 && elements[id].m_point <= 3694)
            {
                value.style.backgroundColor = "#004a99";
            }
            else if(elements[id].m_point == 3695)
            {
                value.style.backgroundColor = "#003166";
            }
            else
            {
                value.style.backgroundColor = "white";
            }
        });
    });
}

//Shows the BoilingPoint trend across the table by comparing values with pre-specified values and altering colors based on that
function BoilingPointColor()
{
    var $boilingElements = $('.tempElements');
    $('#bpTitle').click(function()
    {
        $.each($boilingElements, function ( key, value )
        {
            var id = value.id;
            if(elements[id].b_point >= 0 && elements[id].b_point <= 600)
            {
                value.style.backgroundColor = "#ffe6e6";
            }
            else if(elements[id].b_point >= 601 && elements[id].b_point <= 1200)
            {
                value.style.backgroundColor = "#ffcccc";
            }
            else if(elements[id].b_point >= 1201 && elements[id].b_point <= 1800)
            {
                value.style.backgroundColor = "#ffb3b3";
            }
            else if(elements[id].b_point >= 1801 && elements[id].b_point <= 2400)
            {
                value.style.backgroundColor = "#ff9999";
            }
            else if(elements[id].b_point >= 2401 && elements[id].b_point <= 3000)
            {
                value.style.backgroundColor = "#ff8080";
            }
            else if(elements[id].b_point >= 3001 && elements[id].b_point <= 3600)
            {
                value.style.backgroundColor = "#ff6666";
            }
            else if(elements[id].b_point >= 3601 && elements[id].b_point <= 4200)
            {
                value.style.backgroundColor = "#ff4d4d";
            }
            else if(elements[id].b_point >= 4201 && elements[id].b_point <= 4800)
            {
                value.style.backgroundColor = "#ff3333";
            }
            else if(elements[id].b_point >= 4801 && elements[id].b_point <= 5400)
            {
                value.style.backgroundColor = "#ff1a1a";
            }
            else if(elements[id].b_point >= 5401 && elements[id].b_point <= 5868)
            {
                value.style.backgroundColor = "#ff0000";
            }
            else if(elements[id].b_point == 5869)
            {
                value.style.backgroundColor = "#cc0000"
            }
            else
            {
                value.style.backgroundColor = "white";
            }
        });
    });
}

//Shows the Density trend across the table by comparing values with pre-specified values and altering colors based on that
function DensityColor()
{
    var $densityElements = $('.tempElements');
    $('#densTitle').click(function()
    {
        $.each($densityElements, function ( key, value )
        {
            var id = value.id;
            if(elements[id].density >= 0 && elements[id].density <= 2000)
            {
                value.style.backgroundColor = "#ecd9c6";
            }
            else if(elements[id].density >= 2001 && elements[id].density <= 4000)
            {
                value.style.backgroundColor = "#e6ccb3";
            }
            else if(elements[id].density >= 4001 && elements[id].density <= 6000)
            {
                value.style.backgroundColor = "#d9b38c";
            }
            else if(elements[id].density >= 6001 && elements[id].density <= 10000)
            {
                value.style.backgroundColor = "#cc9966";
            }
            else if(elements[id].density >= 10001 && elements[id].density <= 12000)
            {
                value.style.backgroundColor = "#c68c53";
            }
            else if(elements[id].density >= 12001 && elements[id].density <= 14000)
            {
                value.style.backgroundColor = "#bf8040";
            }
            else if(elements[id].density >= 14001 && elements[id].density <= 16000)
            {
                value.style.backgroundColor = "#ac7339";
            }
            else if(elements[id].density >= 16001 && elements[id].density <= 18000)
            {
                value.style.backgroundColor = "#996633";
            }
            else if(elements[id].density >= 18001 && elements[id].density <= 20000)
            {
                value.style.backgroundColor = "#86592d";
            }
            else if(elements[id].density >= 20001 && elements[id].density <= 22649)
            {
                value.style.backgroundColor = "#734d26";
            }
            else if(elements[id].density == 22650)
            {
                value.style.backgroundColor = "#392613";
            }
            else
            {
                value.style.backgroundColor = "white";
            }
        });
    });
}

//Shows the Valence trend across the table by comparing values with pre-specified values and altering colors based on that
function ValenceColor()
{
    var $valenceElements = $('.tempElements');
    $('#valTitle').click(function()
    {
        $.each($valenceElements, function ( key, value )
        {
            var id = value.id;
            if(elements[id].valence == 0)
            {
                value.style.backgroundColor = "#ffcc80";
            }
            else if(elements[id].valence == 1)
            {
                value.style.backgroundColor = "#ffb84d";
            }
            else if(elements[id].valence == 2)
            {
                value.style.backgroundColor = "#ffad33";
            }
            else if(elements[id].valence == 3)
            {
                value.style.backgroundColor = "#ff9900";
            }
            else if(elements[id].valence == 4)
            {
                value.style.backgroundColor = "#e68a00";
            }
            else if(elements[id].valence == 5)
            {
                value.style.backgroundColor = "#cc7a00";
            }
            else if(elements[id].valence == 6)
            {
                value.style.backgroundColor = "#b36b00";
            }
            else if(elements[id].valence == 7)
            {
                value.style.backgroundColor = "#995c00";
            }
            else if(elements[id].valence == 8)
            {
                value.style.backgroundColor = "#804d00";
            }
            else
            {
                value.style.backgroundColor = "white";
            }
        });
    });
}

//Shows the Electronegativity trend across the table by comparing values with pre-specified values and altering colors based on that
function ENegColor()
{
    var $enegElements = $('.tempElements');
    $('#enegTitle').click(function()
    {
        $.each($enegElements, function ( key, value )
        {
            var id = value.id;
            if(elements[id].eneg >= 0.50 && elements[id].eneg <= 1.00)
            {
                value.style.backgroundColor = "#ffd9b3";
            }
            else if(elements[id].eneg >= 1.01 && elements[id].eneg <= 1.40)
            {
                value.style.backgroundColor = "#ffcc99";
            }
            else if(elements[id].eneg >= 1.41 && elements[id].eneg <= 1.80)
            {
                value.style.backgroundColor = "#ffb366";
            }
            else if(elements[id].eneg >= 1.81 && elements[id].eneg <= 2.20)
            {
                value.style.backgroundColor = "#ff9933";
            }
            else if(elements[id].eneg >= 2.21 && elements[id].eneg <= 2.60)
            {
                value.style.backgroundColor = "#ff8000";
            }
            else if(elements[id].eneg >= 2.61 && elements[id].eneg <= 3.00)
            {
                value.style.backgroundColor = "#e67300";
            }
            else if(elements[id].eneg >= 3.01 && elements[id].eneg <= 3.40)
            {
                value.style.backgroundColor = "#b35900";
            }
            else if(elements[id].eneg >= 3.41 && elements[id].eneg <= 3.97)
            {
                value.style.backgroundColor = "#804000";
            }
            else if(elements[id].eneg == 3.98)
            {
                value.style.backgroundColor = "#ff3300";
            }
            else
            {
                value.style.backgroundColor = "white";
            }
        });
    });
}

//Shows the Electron Affinity trend across the table by comparing values with pre-specified values and altering colors based on that
function AffinityColor()
{
    var $affinityElements = $('.tempElements');
    $('#affinityTitle').click(function()
    {
        $.each($affinityElements, function ( key, value )
        {
            var id = value.id;
            if(elements[id].affinity >= 0 && elements[id].affinity <= 40)
            {
                value.style.backgroundColor = "#e6ffb3";
            }
            else if(elements[id].affinity >= 41 && elements[id].affinity <= 80)
            {
                value.style.backgroundColor = "#ddff99";
            }
            else if(elements[id].affinity >= 81 && elements[id].affinity <= 120)
            {
                value.style.backgroundColor = "#d9ff66";
            }
            else if(elements[id].affinity >= 121 && elements[id].affinity <= 160)
            {
                value.style.backgroundColor = "#ccff33";
            }
            else if(elements[id].affinity >= 161 && elements[id].affinity <= 200)
            {
                value.style.backgroundColor = "#c6ff1a";
            }
            else if(elements[id].affinity >= 201 && elements[id].affinity <= 240)
            {
                value.style.backgroundColor = "#ace600";
            }
            else if(elements[id].affinity >= 241 && elements[id].affinity <= 280)
            {
                value.style.backgroundColor = "#99cc00";
            }
            else if(elements[id].affinity >= 281 && elements[id].affinity <= 320)
            {
                value.style.backgroundColor = "#739900";
            }
            else if(elements[id].affinity >= 321 && elements[id].affinity <= 348)
            {
                value.style.backgroundColor = "#608000";
            }
            else if(elements[id].affinity == 349)
            {
                value.style.backgroundColor = "#00802b";
            }
            else
            {
                value.style.backgroundColor = "white";
            }
        });
    });
}

//Shows the Specific Heat trend across the table by comparing values with pre-specified values and altering colors based on that
function HeatColor()
{
    var $heatElements = $('.tempElements');
    $('#heatTitle').click(function()
    {
        $.each($heatElements, function ( key, value )
        {
            var id = value.id;
            if(elements[id].heat >= 0 && elements[id].heat <= 100)
            {
                value.style.backgroundColor = "#ffc2b3";
            }
            else if(elements[id].heat >= 101 && elements[id].heat <= 300)
            {
                value.style.backgroundColor = "#ffad99";
            }
            else if(elements[id].heat >= 301 && elements[id].heat <= 500)
            {
                value.style.backgroundColor = "#ff9980";
            }
            else if(elements[id].heat >= 501 && elements[id].heat <= 700)
            {
                value.style.backgroundColor = "#ff8566";
            }
            else if(elements[id].heat >= 701 && elements[id].heat <= 900)
            {
                value.style.backgroundColor = "#ff5c33";
            }
            else if(elements[id].heat >= 901 && elements[id].heat <= 1200)
            {
                value.style.backgroundColor = "#ff3300";
            }
            else if(elements[id].heat >= 1201 && elements[id].heat <= 1500)
            {
                value.style.backgroundColor = "#e62e00";
            }
            else if(elements[id].heat >= 1501 && elements[id].heat <= 1820)
            {
                value.style.backgroundColor = "#cc2900";
            }
            else if(elements[id].heat == 3570)
            {
                value.style.backgroundColor = "#ff0000";
            }
            else if(elements[id].heat >= 5193)
            {
                value.style.backgroundColor = "#b30000";
            }
            else if(elements[id].heat >= 14300)
            {
                value.style.backgroundColor = "#800000";
            }
            else
            {
                value.style.backgroundColor = "white";
            }
        });
    });
}

//All the functions defined above are called through addEventListener when the page is loaded
window.addEventListener('load', Lanthanoids, false);
window.addEventListener('load', Actinoids, false);
window.addEventListener('load', TypesHover, false);
window.addEventListener('load', Slider, false);
window.addEventListener('load', ElementsHoverInfo, false);
window.addEventListener('load', PropElements, false);
window.addEventListener('load', RadiusColor, false);
window.addEventListener('load', MeltingPointColor, false);
window.addEventListener('load', BoilingPointColor, false);
window.addEventListener('load', DensityColor, false);
window.addEventListener('load', ValenceColor, false);
window.addEventListener('load', ENegColor, false);
window.addEventListener('load', AffinityColor, false);
window.addEventListener('load', HeatColor, false);
window.addEventListener('load', WelcomeScreen, false);