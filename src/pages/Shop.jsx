import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Consoles
import playstation3 from "../assets/playstation3.png";
import playstation4 from "../assets/playstation4.png";
import playstation5 from "../assets/playstation5.png";
import xboxseries from "../assets/xboxseries.png";
import nintendoswitch from "../assets/nintendoswitch.png";

// Controllers
import ps3controller from "../assets/controllers/ps3controller.png";
import ps4controller from "../assets/controllers/ps4controller.png";
import ps5controller from "../assets/controllers/ps5controller.png";
import xboxcontroller from "../assets/controllers/xboxcontroller.png";
import nintendocontroller from "../assets/controllers/nintendocontroller.png";

// Headset & Audio
import HyperXCloudGamingHeadset from "../assets/HeadsetsandAudio/HyperXCloudGamingHeadset.png";
import NintendoSwitchEarbuds from "../assets/HeadsetsandAudio/NintendoSwitchEarbuds.png";
import PlayStationGoldHeadsetPS4 from "../assets/HeadsetsandAudio/PlayStationGoldHeadsetPS4.png";
import Pulse3DWirelessHeadsetPS5 from "../assets/HeadsetsandAudio/Pulse3DWirelessHeadsetPS5.png";
import XboxStereoHeadset from "../assets/HeadsetsandAudio/XboxStereoHeadset.png";

// Charging & Power Accessories
import DualSenseChargingStationPS5 from "../assets/chargingandpoweraccessories/DualSenseChargingStationPS5.png";
import DualShockChargingDockPS4 from "../assets/chargingandpoweraccessories/DualShockChargingDockPS4.png";
import NintendoSwitchChargingGrip from "../assets/chargingandpoweraccessories/NintendoSwitchChargingGrip.png";
import PowerBanksforSwitch from "../assets/chargingandpoweraccessories/PowerBanksforSwitch.png";
import XboxRechargeableBatteryKit from "../assets/chargingandpoweraccessories/XboxRechargeableBatteryKit.png";

// Storage & Memory
import playstation5NVMeSSDexpansion from "../assets/StorageandMemory/playstation5NVMeSSDexpansion.png";
import externalharddrivebox from "../assets/StorageandMemory/externalharddrivebox.png";
import nintendoswitchmemorycard from "../assets/StorageandMemory/nintendoswitchmemorycard.png";

// Vr and Cameras
import playstationvrps4 from "../assets/vrandcameras/playstationvrps4.png";
import playstationvr2ps5 from "../assets/vrandcameras/playstationvr2ps5.png";
import pscameravr from "../assets/vrandcameras/pscameravr.png";
import xboxkinect from "../assets/vrandcameras/xboxkinect.png";

// Covers and Stands
import consolecoolingstand from "../assets/coversandstands/consolecoolingstand.png";
import dustcoverps5 from "../assets/coversandstands/dustcoverps5.png";
import nintendo_switch_carrying_case from "../assets/coversandstands/nintendo_switch_carrying_case.png";
import vertical_stand_ps5 from "../assets/coversandstands/vertical_stand_ps5.png";

import gaming_chair from "../assets/gamingenviroment/gaming_chair.png";

const Shop = () => {
  const navigate = useNavigate();
  const shops = [
    {
      id: 1,
      shopProductImage: playstation3,
      shopProductName: "Play Station 3",
      shopProductPrice: "₦160,000",
      shopProductAlt: "play station 3 console",
      shopProductButton: "🛒 +",
      category: "Consoles",
      description:
        "The PlayStation 3 (PS3) delivers smooth HD gaming and multimedia entertainment. It comes with a built-in Blu-ray player, online multiplayer via PlayStation Network, and a vast library of classic titles for endless fun and versatility.",
      specifications: [
        "Model: PlayStation 3 (Super Slim)",
        "Processor: Cell Broadband Engine 3.2 GHz",
        "Graphics: NVIDIA RSX 'Reality Synthesizer'",
        "Storage: 250GB HDD (expandable)",
        "Optical Drive: Blu-ray Disc / DVD / CD",
        "Connectivity: HDMI, USB, Wi-Fi, Bluetooth 2.0, Ethernet",
        "Supported Resolution: Up to 1080p HD",
        "Weight: 2.1 kg",
        "Backward Compatibility: Select PS1 titles",
      ],
    },
    {
      id: 2,
      shopProductImage: playstation4,
      shopProductName: "Play Station 4",
      shopProductPrice: "₦280,000",
      shopProductAlt: "play station 4 console",
      shopProductButton: "🛒 +",
      category: "Consoles",
      description:
        "Experience lightning-fast loading with the PS4's ultra-high-speed SSD, deeper immersion with haptic feedback, adaptive triggers, and stunning visuals with ray tracing",
      specifications: [
        "Model: CF1-1215A",
        "Storage: 825GB SSD",
        "Connectivity: Wi-Fi, Bluetooth 5.1",
        "Weight: 4.5kg",
      ],
    },
    {
      id: 3,
      shopProductImage: playstation5,
      shopProductName: "Play Station 5",
      shopProductPrice: "₦850,000",
      shopProductAlt: "play station 5 console",
      shopProductButton: "🛒 +",
      category: "Consoles",
      description:
        "The PlayStation 5 (PS5) delivers ultra-fast performance with its SSD, stunning 4K visuals, and immersive gameplay powered by the DualSense controller’s haptic feedback and adaptive triggers. Experience next-gen gaming like never before.",
      specifications: [
        "Model: CFI-1215A",
        "Storage: 825GB SSD",
        "Processor: Custom AMD Ryzen Zen 2",
        "Graphics: RDNA 2 GPU (10.28 TFLOPs)",
        "Resolution: Up to 8K",
        "Connectivity: Wi-Fi 6, Bluetooth 5.1",
        "Weight: 4.5kg",
      ],
    },
    {
      id: 4,
      shopProductImage: xboxseries,
      shopProductName: "Xbox Series X",
      shopProductPrice: "₦500,000",
      shopProductAlt: "xbox console",
      shopProductButton: "🛒 +",
      category: "Consoles",
      description:
        "The Xbox Series X delivers powerful next-gen gaming with ultra-fast load times, smooth 4K performance, and a sleek modern design. Enjoy true immersion with its custom SSD, advanced cooling, and backward compatibility for thousands of games.",
      specifications: [
        "Model: RRT-00010",
        "Storage: 1TB Custom NVMe SSD",
        "Processor: Custom AMD Zen 2 (8 cores, 3.8GHz)",
        "Graphics: AMD RDNA 2 GPU (12 TFLOPs)",
        "Resolution: Up to 8K HDR",
        "Connectivity: Wi-Fi, Ethernet, Bluetooth, HDMI 2.1",
        "Weight: 4.45 kg",
      ],
    },
    {
      id: 5,
      shopProductImage: nintendoswitch,
      shopProductName: "Nintendo Switch",
      shopProductPrice: "₦350,000",
      shopProductAlt: "nintendo console",
      shopProductButton: "🛒 +",
      category: "Consoles",
      description:
        "The Nintendo Switch offers flexible gaming — play on your TV or take it on the go. With its hybrid design, detachable Joy-Con controllers, and an ever-growing library of exclusive titles, it delivers fun, family-friendly, and portable entertainment.",
      specifications: [
        "Model: HAC-001(-01)",
        "Storage: 32GB (expandable via microSD)",
        "Display: 6.2-inch LCD touchscreen",
        "Resolution: 1280 x 720 (Handheld), Up to 1080p (Docked)",
        "Battery Life: 4.5 to 9 hours",
        "Connectivity: Wi-Fi, Bluetooth 4.1, USB-C",
        "Weight: 0.88 lbs (398g)",
      ],
    },

    {
      id: 6,
      shopProductImage: ps3controller,
      shopProductName: "PS 3 Controller",
      shopProductPrice: "₦20,000",
      shopProductAlt: "ps3 controller",
      shopProductButton: "🛒 +",
      category: "Controllers",
      description:
        "The PlayStation 3 DualShock 3 controller delivers precise control and immersive gaming with its pressure-sensitive buttons and motion-sensing technology. Its wireless Bluetooth connection and built-in vibration feedback provide smooth and responsive gameplay for PS3 titles.",
      specifications: [
        "Model: DualShock 3 Wireless Controller",
        "Connectivity: Bluetooth 2.0",
        "Power: Built-in rechargeable Li-ion battery",
        "Charging Port: Mini USB",
        "Features: Sixaxis motion sensor, vibration feedback",
        "Compatibility: PlayStation 3 console",
        "Weight: Approximately 192g",
      ],
    },
    {
      id: 7,
      shopProductImage: ps4controller,
      shopProductName: "PS 4 Controller",
      shopProductPrice: "₦35,000",
      shopProductAlt: "ps4 controller",
      shopProductButton: "🛒 +",
      category: "Controllers",
      description:
        "The PlayStation 4 DualShock 4 controller offers precise control, immersive feedback, and a sleek design for comfortable gameplay. It features a built-in touchpad, light bar, motion sensors, and a headphone jack, enhancing both casual and competitive gaming experiences.",
      specifications: [
        "Model: DualShock 4 Wireless Controller",
        "Connectivity: Bluetooth 2.1 + EDR",
        "Power: Built-in rechargeable 1000mAh Li-ion battery",
        "Charging Port: Micro USB",
        "Features: Touchpad, light bar, built-in speaker, 3.5mm stereo jack",
        "Sensors: Six-axis motion detection (gyroscope and accelerometer)",
        "Compatibility: PlayStation 4, limited support for PS5 and PC",
        "Weight: Approximately 210g",
      ],
    },
    {
      id: 8,
      shopProductImage: ps5controller,
      shopProductName: "PS 5 controller",
      shopProductPrice: "₦65,000",
      shopProductAlt: "ps5 Controller",
      shopProductButton: "🛒 +",
      category: "Controllers",
      description:
        "The PlayStation 5 DualSense controller delivers a revolutionary gaming experience with adaptive triggers, haptic feedback, and a refined ergonomic design. It enhances immersion through responsive vibrations and precise motion controls, offering players a deeper connection to every game.",
      specifications: [
        "Model: DualSense Wireless Controller",
        "Connectivity: Bluetooth 5.1 / USB Type-C",
        "Power: Built-in rechargeable 1560mAh Li-ion battery",
        "Features: Adaptive triggers, haptic feedback, built-in microphone, and touchpad",
        "Charging Port: USB Type-C",
        "Audio: Integrated speaker and 3.5mm stereo headset jack",
        "Sensors: Six-axis motion sensing system",
        "Compatibility: PlayStation 5, PC, and mobile devices (via Bluetooth)",
        "Weight: Approximately 280g",
      ],
    },
    {
      id: 9,
      shopProductImage: xboxcontroller,
      shopProductName: "Xbox Controller",
      shopProductPrice: "₦120,000",
      shopProductAlt: "xbox controller",
      shopProductButton: "🛒 +",
      category: "Controllers",
      description:
        "The Xbox Wireless Controller offers precise control and exceptional comfort with a refined design, textured grips, and responsive triggers. It features seamless wireless connectivity, a hybrid D-pad, and easy pairing with consoles, PCs, and mobile devices for a smooth gaming experience.",
      specifications: [
        "Model: Xbox Wireless Controller (Series X/S)",
        "Connectivity: Xbox Wireless, Bluetooth, and USB-C",
        "Power: 2 AA batteries or rechargeable battery pack (sold separately)",
        "Features: Hybrid D-pad, textured grip on triggers and bumpers, and Share button",
        "Charging Port: USB Type-C",
        "Audio: 3.5mm stereo headset jack",
        "Compatibility: Xbox Series X/S, Xbox One, Windows 10/11 PCs, Android, and iOS",
        "Dimensions: 6 x 4 x 2.5 inches (approx.)",
        "Weight: Approximately 280g (without batteries)",
      ],
    },
    {
      id: 10,
      shopProductImage: nintendocontroller,
      shopProductName: "Nintendo Controller",
      shopProductPrice: "₦70,000",
      shopProductAlt: "nintendo controller",
      shopProductButton: "🛒 +",
      category: "Controllers",
      description:
        "The Nintendo Switch Pro Controller provides a premium gaming experience with ergonomic design, precise motion controls, and HD rumble. It offers comfortable grip for long play sessions, long battery life, and seamless wireless connectivity to the Nintendo Switch console.",
      specifications: [
        "Model: Nintendo Switch Pro Controller",
        "Connectivity: Bluetooth 3.0 (wireless), USB-C (wired charging)",
        "Battery: Built-in rechargeable lithium-ion battery (approx. 40 hours playtime)",
        "Features: HD Rumble, Motion Controls, Amiibo (NFC) functionality",
        "Charging Port: USB Type-C",
        "Compatibility: Nintendo Switch, Nintendo Switch OLED, Nintendo Switch Lite (limited features)",
        "Weight: Approx. 246g",
        "Dimensions: 106mm × 152mm × 60mm (approx.)",
        "Color: Standard Black (varies with special editions)",
      ],
    },

    {
      id: 11,
      shopProductImage: Pulse3DWirelessHeadsetPS5,
      shopProductName: "PS5 Wireless Headset",
      shopProductPrice: "₦350,000",
      shopProductAlt: "ps5 headset",
      shopProductButton: "🛒 +",
      category: "Headsets",
      description:
        "The PS5 Pulse 3D Wireless Headset is designed to deliver immersive 3D audio powered by the PlayStation 5’s Tempest 3D AudioTech. With refined ear pads, a hidden dual noise-cancelling microphone, and easy-access controls, it provides comfort and clarity for long gaming sessions.",
      specifications: [
        "Model: Pulse 3D Wireless Headset",
        "Audio Technology: Tempest 3D AudioTech",
        "Connectivity: Wireless (USB dongle), 3.5mm audio jack",
        "Microphones: Dual hidden noise-cancelling mics",
        "Battery Life: Up to 12 hours (rechargeable battery)",
        "Charging Port: USB Type-C",
        "Controls: Volume, mic mute, chat/game mix, power",
        "Compatibility: PlayStation 5, PlayStation 4, PC, Mac (limited features)",
        "Weight: Approx. 295g",
      ],
    },
    {
      id: 12,
      shopProductImage: PlayStationGoldHeadsetPS4,
      shopProductName: "PS4 Wireless Headset",
      shopProductPrice: "₦280,000",
      shopProductAlt: "ps4 headset",
      shopProductButton: "🛒 +",
      category: "Headsets",
      description:
        "The PS4 Gold Wireless Headset delivers powerful, immersive sound with 7.1 virtual surround audio. Designed for comfort and clarity, it features hidden noise-cancelling microphones, refined over-ear cushions, and easy-access controls, making it perfect for long gaming sessions on PS4 and PS5.",
      specifications: [
        "Model: Gold Wireless Headset (PS4)",
        "Audio: 7.1 Virtual Surround Sound",
        "Microphones: Dual hidden noise-cancelling mics",
        "Connectivity: Wireless (USB adapter), 3.5mm audio jack",
        "Battery Life: Up to 8 hours (rechargeable battery)",
        "Charging Port: Micro-USB",
        "Controls: Volume, mic mute, virtual surround toggle, power",
        "Compatibility: PlayStation 4, PlayStation 5, PC, Mobile (wired mode)",
        "Weight: Approx. 290g",
      ],
    },
    {
      id: 13,
      shopProductImage: XboxStereoHeadset,
      shopProductName: "Xbox Stero Headset",
      shopProductPrice: "₦250,000",
      shopProductAlt: "xbox stero headset",
      shopProductButton: "🛒 +",
      category: "Headsets",
      description:
        "The Xbox Stereo Headset delivers clear, detailed audio and exceptional comfort for long gaming sessions. It features high-quality 40mm drivers, an adjustable mic, and plush ear cushions for immersive gameplay. With easy plug-and-play setup via the 3.5mm jack, it’s perfect for Xbox consoles, PCs, and mobile devices.",
      specifications: [
        "Model: Xbox Stereo Headset",
        "Audio Drivers: 40mm high-fidelity speakers",
        "Microphone: Adjustable, bendable boom mic",
        "Connectivity: 3.5mm audio jack (wired connection)",
        "Controls: Volume and mic mute on earcup",
        "Frequency Response: 20Hz – 20kHz",
        "Compatibility: Xbox Series X|S, Xbox One, Windows PC, Mobile",
        "Earpads: Ultra-soft leatherette cushions",
        "Frame: Flexible, lightweight metal headband with foam cushioning",
        "Weight: Approx. 312g",
      ],
    },
    {
      id: 14,
      shopProductImage: NintendoSwitchEarbuds,
      shopProductName: "Nintendo Switch Earbuds",
      shopProductPrice: "₦150,000",
      shopProductAlt: "nintendo switch earbuds",
      shopProductButton: "🛒 +",
      category: "Headsets",
      description:
        "The Nintendo Switch Earbuds are designed for portable and immersive gaming on the go. With clear stereo sound, an in-line microphone, and lightweight comfort, these earbuds make communication and gameplay seamless. Perfect for handheld or docked mode, they provide crisp audio whether you’re exploring Hyrule or racing in Mario Kart.",
      specifications: [
        "Model: Nintendo Switch In-Ear Headphones",
        "Audio Type: Stereo sound",
        "Microphone: In-line mic with mute switch",
        "Connectivity: 3.5mm audio jack",
        "Cable Length: 1.2 meters",
        "Frequency Response: 20Hz – 20kHz",
        "Impedance: 32 Ohms",
        "Compatibility: Nintendo Switch, Switch Lite, Switch OLED, and other 3.5mm devices",
        "Design: Lightweight and compact for portable gaming",
        "Ear Tips: Multiple sizes for custom comfort",
      ],
    },
    {
      id: 15,
      shopProductImage: HyperXCloudGamingHeadset,
      shopProductName: "HyperX Cloud Gaming Headset",
      shopProductPrice: "₦900,000",
      shopProductAlt: "hyperX cloud gaming headset",
      shopProductButton: "🛒 +",
      category: "Headsets",
      description:
        "The HyperX Cloud Gaming Headset brings balance of comfort and performance for gamers. With plush memory-foam cushions, a durable aluminium frame, and crisp 53 mm drivers, it delivers immersive audio for PC, console and mobile gaming.",
      specifications: [
        "Driver: 53 mm with neodymium magnets",
        "Form Factor: Over-ear, circumaural, closed back",
        "Frequency Response: 15 Hz – 25 kHz",
        "Microphone: Detachable noise-cancelling electret condenser mic",
        "Connectivity: Wired – 3.5 mm jack; compatible with PC, PS5, PS4, Xbox consoles, Nintendo Switch, mobile",
        "Frame Type: Aluminium",
        "Ear Cushions: Memory foam with premium leatherette surface",
        "Total Harmonic Distortion: ≤ 2%",
        "Sensitivity: –39 dBV (mic) / typical for drivers",
      ],
    },

    {
      id: 16,
      shopProductImage: DualSenseChargingStationPS5,
      shopProductName: "Dual Charging Station Play Station 5",
      shopProductPrice: "₦350,000",
      shopProductAlt: "Charging station play station 5",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "The DualSense Charging Station lets you dock and charge up to two DualSense wireless controllers simultaneously—no need to connect them to your console. Its low-profile click-in design matches the PS5 aesthetic and frees up USB ports for other accessories.",
      specifications: [
        "Model: DualSense Charging Station (CFI-ZDS1)",
        "Input: 5.1 V DC 2.8 A (via AC adaptor) :contentReference[oaicite:1]{index=1}",
        "Devices: Charges up to 2 DualSense™ or DualSense Edge™ wireless controllers simultaneously :contentReference[oaicite:2]{index=2}",
        "Charging time: Approx. 3 hours from empty to full for one or two controllers :contentReference[oaicite:3]{index=3}",
        "Dimensions: Approx. 52 × 62 × 159 mm (W×H×D) :contentReference[oaicite:4]{index=4}",
        "Weight: Approx. 180 g :contentReference[oaicite:5]{index=5}",
        "Operating temperature: 5 °C to 35 °C :contentReference[oaicite:6]{index=6}",
      ],
    },
    {
      id: 17,
      shopProductImage: DualShockChargingDockPS4,
      shopProductName: "Charging Dock Play Station 4",
      shopProductPrice: "₦200,000",
      shopProductAlt: "charging dock play station 4",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "Charge and store your PS4 controllers with ease. This dock lets you snap two DualShock 4 controllers into place, keeps your gaming area tidy, and ensures you’re always ready to play.",
      specifications: [
        "Model: CUH-ZDC1 (official Sony PS4 Charging Station)",
        "Input: DC 5 V (via AC adaptor) :contentReference[oaicite:1]{index=1}",
        "AC Adaptor Rating: AC 100-240 V, 0.3 A, 50/60 Hz :contentReference[oaicite:2]{index=2}",
        "Output: DC 5 V, 2 A :contentReference[oaicite:3]{index=3}",
        "External Dimensions: Approx. 45.0 × 55.5 × 135.0 mm (W×H×D) :contentReference[oaicite:4]{index=4}",
        "Mass: Approx. 230 g :contentReference[oaicite:5]{index=5}",
        "Charging Time: Approx. 2 hours when controller battery is empty :contentReference[oaicite:6]{index=6}",
        "Operating Temperature: 5 °C to 35 °C :contentReference[oaicite:7]{index=7}",
        "Controllers Charged: Up to 2 DualShock 4 controllers simultaneously",
      ],
    },
    {
      id: 18,
      shopProductImage: NintendoSwitchChargingGrip,
      shopProductName: "Nintendo Switch Charging Grip",
      shopProductPrice: "₦140,000",
      shopProductAlt: "nintendo switch charging grip",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "The Nintendo Switch Charging Grip lets you attach your Joy-Con controllers into a traditional gamepad shape while charging them via USB-C. Play comfortably and keep your controllers powered simultaneously.",
      specifications: [
        "Compatibility: Nintendo Switch Joy-Con (Left & Right)",
        "Charging Method: USB Type-C cable (connected to power source) :contentReference[oaicite:1]{index=1}",
        "Function: Lets you play as a combined controller and charges Joy-Con at the same time :contentReference[oaicite:2]{index=2}",
        "Colour: Standard Black (varies by region) :contentReference[oaicite:3]{index=3}",
        "Dimensions: Approx. 101 mm × 144 mm × 40.1 mm (for one variant) :contentReference[oaicite:4]{index=4}",
        "Notes: Requires external power via USB — the grip itself doesn’t contain a large internal battery for standalone charging. :contentReference[oaicite:5]{index=5}",
      ],
    },
    {
      id: 19,
      shopProductImage: PowerBanksforSwitch,
      shopProductName: "Power Bank for Switch",
      shopProductPrice: "₦100,000",
      shopProductAlt: "power bank for switch",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "This power bank for Nintendo Switch gives you extended playtime anywhere. With high-capacity battery backup and USB-C charging support, you can continue gaming on the go without worrying about running out of power.",
      specifications: [
        "Capacity: 10000mAh",
        "Output: USB-C, 5V/3A",
        "Compatibility: Switch, Switch OLED, Switch Lite",
        "Charging Type: USB-C Power Delivery",
        "Safety: Over-charge and short-circuit protection",
      ],
    },
    {
      id: 20,
      shopProductImage: XboxRechargeableBatteryKit,
      shopProductPrice: "₦70,000",
      shopProductName: "Xbox Rechargeable Battery Kit",
      shopProductAlt: "xbox rechargeable battery kit",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "The Xbox Rechargeable Battery Kit replaces disposable AA batteries in your Xbox Wireless Controller with a high-capacity rechargeable pack. Charge via USB-C while you play or during standby — no more interrupting your session to change batteries.",
      specifications: [
        "Compatible With: Xbox Wireless Controllers with USB-C port",
        "Battery Life: Up to 30 hours per full charge",
        "Charging: USB-C cable included; supports play-while-charging",
        "Full Charge Time: Under 4 hours (varies)",
        "Say Goodbye to AA Batteries: Built-in rechargeable battery pack",
      ],
    },

    {
      id: 21,
      shopProductImage: playstation5NVMeSSDexpansion,
      shopProductName: "PlayStation 5 NVMe SSD",
      shopProductPrice: "₦50,000",
      shopProductAlt: "playstation 5 NVMe SSD",
      shopProductButton: "🛒 +",
      category: "Storage",
      description:
        "Expand your PS5's storage with a high-speed NVMe SSD. Designed for seamless gameplay, it offers fast load times and ample space for your favorite titles.",
      specifications: [
        "Interface: PCIe Gen4 x4 M.2 NVMe SSD (Key M)",
        "Capacity: 250GB – 8TB",
        "Form Factor: M.2 2230, 2242, 2260, 2280, 22110",
        "Sequential Read Speed: 5,500MB/s or higher recommended",
        "Dimensions (with heatsink): Up to 110mm (L) x 25mm (W) x 11.25mm (H)",
        "Cooling: Required for optimal performance",
        "Compatibility: PS5 consoles",
      ],
    },
    {
      id: 22,
      shopProductImage: externalharddrivebox,
      shopProductName: "External Hard Drive",
      shopProductPrice: "₦130,000",
      shopProductAlt: "external hard drive",
      shopProductButton: "🛒 +",
      category: "Storage",
      description:
        "Expand your Xbox storage effortlessly with this external hard drive. Offering ample capacity and seamless integration, it's perfect for storing and accessing your favorite games.",
      specifications: [
        "Capacity: 2TB, 4TB, or 5TB options",
        "Interface: USB 3.2 Gen 1",
        "Compatibility: Xbox Series X|S, Xbox One",
        "Form Factor: Portable 2.5-inch HDD",
        "Power: Bus-powered (no external adapter needed)",
        "Design: Xbox-branded with LED lighting",
        "Warranty: 3-year Rescue Data Recovery Services",
      ],
    },
    {
      id: 23,
      shopProductImage: nintendoswitchmemorycard,
      shopProductName: "Nintendo Switch Memory Card",
      shopProductPrice: "₦20,000",
      shopProductAlt: "nintendo switch memory card",
      shopProductButton: "🛒 +",
      category: "Storage",
      description:
        "Expand your Nintendo Switch storage effortlessly with this officially licensed microSD card. Designed for seamless compatibility, it allows you to store more games and content without compromising performance.",
      specifications: [
        "Capacity: 64GB, 128GB, 256GB, 512GB, or 1TB",
        "Type: microSDXC UHS-I",
        "Speed: Read speeds up to 100MB/s, Write speeds up to 90MB/s",
        "Compatibility: Nintendo Switch, Switch Lite, and Switch OLED models",
        "Officially Licensed: Designed and tested for Nintendo Switch systems",
        "Warranty: Lifetime limited warranty",
      ],
    },

    {
      id: 24,
      shopProductImage: playstationvr2ps5,
      shopProductName: "PlayStation VR PS5",
      shopProductPrice: "₦250,000",
      shopProductAlt: "playstation vr ps5",
      shopProductButton: "🛒 +",
      category: "Virtual Reality",
      description:
        "Immerse yourself in next-gen virtual reality with the PlayStation VR2. Designed exclusively for PS5, it offers stunning visuals, intuitive controls, and a wide field of view for an unparalleled gaming experience.",
      specifications: [
        "Display: Dual OLED panels, 2000 x 2040 resolution per eye",
        "Refresh Rate: 90Hz to 120Hz",
        "Field of View: Approximately 110 degrees",
        "Connectivity: Single USB-C cable (4.5m)",
        "Tracking: 4 external cameras, 2 IR cameras for eye-tracking",
        "Controllers: Includes PS VR2 Sense controllers with adaptive triggers and haptic feedback",
        "Audio: Built-in microphone, supports 3D audio via PS5 Tempest 3D AudioTech",
        "Compatibility: Exclusively with PlayStation 5; not compatible with PS4 or original PS VR games",
        "Cooling: Integrated ventilation system to reduce lens fogging",
        "Weight: Approximately 560g",
      ],
    },
    {
      id: 25,
      shopProductImage: playstationvrps4,
      shopProductName: "PlayStation VR PS4",
      shopProductPrice: "₦200,000",
      shopProductAlt: "playstation vr ps4",
      shopProductButton: "🛒 +",
      category: "Virtual Reality",
      description:
        "Experience immersive virtual reality gaming with the PlayStation VR headset. Designed for PlayStation 4, it offers a seamless blend of comfort, high-quality visuals, and intuitive controls for an unparalleled gaming experience.",
      specifications: [
        "Display: 5.7-inch OLED",
        "Resolution: 1920x1080",
        "Refresh Rate: 90/120Hz",
        "FOV: ~100°",
        "Connectivity: HDMI & USB",
        "Weight: 600g",
      ],
    },
    {
      id: 26,
      shopProductImage: pscameravr,
      shopProductName: "PlayStation Camera VR",
      shopProductPrice: "₦120,000",
      shopProductAlt: "playstation camera vr",
      shopProductButton: "🛒 +",
      category: "Virtual Reality",
      description:
        "The PlayStation Camera enhances your PS VR experience by tracking your head movements and motion controllers, enabling immersive virtual reality gameplay on PS4.",
      specifications: [
        "Camera: Dual wide-angle lenses",
        "Resolution: 1280×800 @60Hz",
        "Connectivity: AUX port (proprietary USB 3.0)",
        "Dimensions: 186 × 27 × 28 mm",
        "Weight: ~152g",
        "Compatibility: PS4, PS VR",
        "Tracking: 3D depth-sensing for head and controller tracking",
      ],
    },
    {
      id: 27,
      shopProductImage: xboxkinect,
      shopProductName: "Xbox Kinect",
      shopProductPrice: "₦90,000",
      shopProductAlt: "xbox kinect",
      shopProductButton: "🛒 +",
      category: "Virtual Reality",
      description:
        "The Xbox Kinect is a motion-sensing device that allows players to interact with games using body movements, gestures, and voice commands, providing an immersive gaming experience without a controller.",
      specifications: [
        "Sensor: RGB camera, depth sensor, multi-array microphone",
        "Resolution: 1080p HD camera",
        "Field of View: 70–80 degrees",
        "Connectivity: USB 3.0",
        "Tracking: Full-body motion tracking",
        "Voice Recognition: Supports voice commands and chat",
        "Compatibility: Xbox One and select Windows PCs",
      ],
    },

    {
      id: 28,
      shopProductImage: consolecoolingstand,
      shopProductName: "Console Cooling Stand",
      shopProductPrice: "₦65,000",
      shopProductAlt: "console cooling stand",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "Enhance your gaming setup with this multifunctional cooling stand. Designed to keep your console cool during extended gaming sessions, it also offers charging capabilities and additional storage options.",
      specifications: [
        "Cooling: Built-in high-speed fans",
        "Charging: Dual controller charging ports",
        "Storage: Slots for up to 12 game discs",
        "Compatibility: PS4, PS4 Slim, PS4 Pro, Xbox Series S",
        "Additional Features: USB ports, headset holder, LED indicators",
      ],
    },
    {
      id: 29,
      shopProductImage: dustcoverps5,
      shopProductName: "Dust Cover PS5",
      shopProductPrice: "₦35,000",
      shopProductAlt: "dust cover ps5",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "Protect your PS5 console from dust, scratches, and minor spills with this custom-fit dust cover. Designed for both vertical and horizontal placements, it ensures your console stays clean and safe when not in use.",
      specifications: [
        "Material: Premium nylon or Oxford cloth",
        "Design: Custom-fit for PS5 dimensions",
        "Compatibility: PS5 Digital and Disc Editions",
        "Features: Anti-scratch, water-resistant, breathable",
        "Usage: Removable for cleaning; not to be used while console is powered on",
      ],
    },
    {
      id: 30,
      shopProductImage: nintendo_switch_carrying_case,
      shopProductName: "Nintendo Switch Case",
      shopProductPrice: "₦40,000",
      shopProductAlt: "nintendo switch case",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "Protect and transport your Nintendo Switch with this official carrying case, featuring a durable exterior, padded interior, and storage for games and accessories.",
      specifications: [
        "Material: Hard EVA shell with soft inner lining",
        "Capacity: Fits Nintendo Switch console, Joy-Con controllers, and accessories",
        "Storage: Slots for up to 6 game cards",
        "Design: Officially licensed with Nintendo branding",
        "Compatibility: Compatible with Nintendo Switch and Switch OLED models",
      ],
    },
    {
      id: 31,
      shopProductImage: gaming_chair,
      shopProductName: "Gaming Chair",
      shopProductPrice: "₦250,000",
      shopProductAlt: "gaming chair ",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "Enhance your gaming experience with this ergonomic gaming chair, designed for comfort during long sessions. Features adjustable armrests, lumbar support, and a reclining backrest.",
      specifications: [
        "Material: PU leather or breathable fabric",
        "Adjustability: 4D armrests, reclining backrest (90°–180°)",
        "Lumbar Support: Adjustable or built-in",
        "Weight Capacity: Up to 300 lbs",
        "Base: Sturdy metal with smooth-rolling casters",
      ],
    },
    {
      id: 32,
      shopProductImage: vertical_stand_ps5,
      shopProductName: "Vertical Stand PS5",
      shopProductPrice: "₦50,000",
      shopProductAlt: "vertical stand ps5",
      shopProductButton: "🛒 +",
      category: "Accessories",
      description:
        "Secure your PS5 console in an upright position with this official vertical stand, ensuring stability and optimal airflow.",
      specifications: [
        "Compatibility: PS5 CFI-1000, CFI-2000, and CFI-2100 models",
        "Dimensions: 7.5 inches (H) x 1.63 inches (W) x 7.5 inches (D)",
        "Weight: 0.65 pounds",
        "Material: Durable plastic with anti-slip base",
        "Installation: Tool-free setup with included screw for added stability",
      ],
    },
  ];

  const [selectedCategory, setSelctedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const displayedProducts =
    searchText.trim() !== ""
      ? shops.filter((shop) =>
          shop.shopProductName.toLowerCase().includes(searchText.toLowerCase())
        )
      : selectedCategory === "All"
      ? shops
      : shops.filter((shop) => shop.category === selectedCategory);

  const handleControllers = () => {
    setSelctedCategory("Controllers");
  };

  function handleHeadsets() {
    setSelctedCategory("Headsets");
  }

  const handleAccessories = () => {
    setSelctedCategory("Accessories");
  };

  return (
    <>
      <Navbar />
      <section className="page-banner/title text-center py-6 mt-5">
        <h1 className="text-5xl mb-2 font-bold">Shop</h1>
        <p className="text-gray-600 mt-3 -mb-2 text-lg">
          Browse the latest gaming consoles and accessories
        </p>
      </section>

      <section className="filter-bar flex flex-wrap gap-2 justify-center mb-10 py-2 px-4">
        <button
          onClick={() => setSelctedCategory("All")}
          className="border border-black bg-gray-100 px-2 py-1 rounded"
        >
          All
        </button>
        <button
          onClick={() => setSelctedCategory("Consoles")}
          className="border border-black bg-gray-100  px-3 py-1 rounded"
        >
          Consoles
        </button>
        <button
          onClick={handleControllers}
          className="border border-black bg-gray-100 px-3 py-1 rounded"
        >
          Controllers
        </button>
        <button
          onClick={handleHeadsets}
          className="border border-black bg-gray-100 px-3 py-1 rounded"
        >
          Headsets
        </button>
        <button
          onClick={() => setSelctedCategory("Virtual Reality")}
          className="border border-black bg-gray-100 px-3 py-1 rounded"
        >
          VR
        </button>
        <button
          onClick={() => setSelctedCategory("Storage")}
          className="border border-black bg-gray-100 px-3 py-1 rounded"
        >
          Storage
        </button>
        <button
          onClick={handleAccessories}
          className="border border-black bg-gray-100 px-3 py-1 rounded"
        >
          Accessories
        </button>

        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          id="search-button"
          className="border border-black px-3 py-1 rounded outline-none"
          type="search"
          placeholder="Search here..."
        />
      </section>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-4 gap-6 p-4">
        {displayedProducts.map((shop, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/product/${shop.id}`, { state: { product: shop } })
            }
            className="border border-gray-300 rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={shop.shopProductImage}
              alt={shop.shopProductAlt}
              className="w-full h-16 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-1">
              {shop.shopProductName}
            </h2>
            <p className="text-gray-700 mb-3">{shop.shopProductPrice}</p>
            <button className="bg-black text-white px-2 py-1 rounded hover:bg-gray-600 transition">
              {shop.shopProductButton}
            </button>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Shop;
