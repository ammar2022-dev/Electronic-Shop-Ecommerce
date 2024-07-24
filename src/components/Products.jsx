import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

// Import your images
import img1 from '../assets/images/usb3.0.jpg';
import img2 from '../assets/images/camera.jpg';
import img3 from '../assets/images/earphone.jpg';
import img4 from '../assets/images/microphone.webp';
import img5 from '../assets/images/wristwatch.jpg';
import img6 from '../assets/images/arduino.jpg';
import img7 from '../assets/images/blackcameralens.jpg';
import img8 from '../assets/images/bluetoothheadsets.avif';
import img9 from '../assets/images/flashmemorypendrive.jpg';
import img10 from '../assets/images/headphoneandheadsetsaccess.jpg';
import img11 from '../assets/images/monoheadsets.jpg';
import img12 from '../assets/images/mouse.avif';
import img13 from '../assets/images/phonecases.avif';
import img14 from '../assets/images/powerbanks.avif';
import img15 from '../assets/images/sdcard.jpg';
import img16 from '../assets/images/wristwatchclock.jpg';
import img17 from '../assets/images/xbox.jpg';
import img18 from '../assets/images/externalusb2.0.jpeg';
import img19 from '../assets/images/tabletradiator.webp';
import img20 from '../assets/images/Dc12Vcoolingfan.webp';
import img21 from '../assets/images/F4plus_notebookcoolingpad.webp';
import img22 from '../assets/images/Cx09tabletcooler.webp';
import img23 from '../assets/images/500Winverter_DC 12V TO AC 220V powersupply.webp';
import img24 from '../assets/images/micronicscyclone.webp';
import img25 from '../assets/images/Oasis600W Gaming.webp';
import img26 from '../assets/images/4GbRam.webp';
import img27 from '../assets/images/usb2.0 external sound card.webp';
import img28 from '../assets/images/externalusbsoundcard.webp';
import img29 from '../assets/images/Quadro K600 1GB 128Bit DDR3 Graphic Card, Best For Gaming.webp';
import img30 from '../assets/images/NVIDIA GEFORCE GT730 2GB GDDR5 GAMING GRAPHIC.webp';
import img31 from '../assets/images/Mini PCIe to PCI Express 16X Riser for Laptop External image.webp';
import img32 from '../assets/images/AMD Radeon R5 340X 2GB DDR3 PCI Express Graphic.webp';
import img33 from '../assets/images/AMD R5240 1GB Graphics Card- DDR3 64bit dx12.webp';
import img34 from '../assets/images/AMD RADEON HD8490 1GB, DDR3, 64BIT, GAMING GRAPHI.webp';
import img35 from '../assets/images/AMD Radeon HD 8570 1GB DDR3 DirectX 12, PCIe x16.webp';
import img36 from '../assets/images/Nvidia Quadro P620 2GB GDDR5 , Graphic Card.webp';
import img37 from '../assets/images/PNY Quadro NVS315 1GB DDR3 DirectX11 best for Gaming.webp';
import img38 from '../assets/images/PREMIUM COOLCOLD Vacuum Portable Laptop Cooler USB.webp';
import img39 from '../assets/images/DL06 Mobile Cooling Fan.webp';
import img40 from '../assets/images/CX09 Tablet Cooler Mobile Cooler Phone Radiator For IPAD.webp';
import img41 from '../assets/images/Best Quality Baseball Men Caps for Casual Use Sun Hats.jpeg';
import img42 from '../assets/images/7-Piece Keyboard Cleaning Brush Earplug Cleaning Kit.jpeg';
import img43 from '../assets/images/Camera Lens Protector Compatible with iPhone 13.webp';
import img44 from '../assets/images/Lens Back Cap Canon DSLR Camera Rear Size- Black.webp';
import img45 from '../assets/images/Computer Keyboard Cleaner Brush 7 In 1 Electronic Kit.webp';
import img46 from '../assets/images/Phone Lens 0.45X Ultra Wide-Angle Macro Lens Phone.webp';
import img47 from '../assets/images/LKPCIGCXM Fish Eye Phone Lens, 0.45X Phone with HD.webp';
import img48 from '../assets/images/Mini Portable Multi-Functional 7 In 1 Cleaning Tool Kit.webp';
import img49 from '../assets/images/1 Piece Love Heart Shape Phone Wipe Cloth Screen Wip.webp';
import img50 from '../assets/images/1Pair Camera Accessories Black & Transparent Lens.webp';
import img51 from '../assets/images/Lens Hood Canon for EF 50mm f 1.8 STM ES-68 - Black.webp';

const Products = () => {
  const productData = [
    {
      id: 1,
      title: "USB 3.0",
      price: 10.99,
      description: "Fast USB 3.0 storage",
      category: "electronics",
      image: img1,
      rating: {
        rate: 4.5,
        count: 100
      }
    },
    {
      id: 2,
      title: "Digital Camera",
      price: 299.99,
      description: "High-quality digital camera",
      category: "electronics",
      image: img2,
      rating: {
        rate: 4.7,
        count: 150
      }
    },
    {
      id: 3,
      title: "Earphone",
      price: 15.99,
      description: "Comfortable earphones",
      category: "electronics",
      image: img3,
      rating: {
        rate: 4.2,
        count: 200
      }
    },
    {
      id: 4,
      title: "Microphone",
      price: 49.99,
      description: "High-quality microphone",
      category: "electronics",
      image: img4,
      rating: {
        rate: 4.6,
        count: 120
      }
    },
    {
      id: 5,
      title: "Wrist Watch",
      price: 99.99,
      description: "Stylish wrist watch",
      category: "electronics",
      image: img5,
      rating: {
        rate: 4.3,
        count: 180
      }
    },
    {
      id: 6,
      title: "Arduino",
      price: 29.99,
      description: "Arduino for your projects",
      category: "electronics",
      image: img6,
      rating: {
        rate: 4.4,
        count: 140
      }
    },
    {
      id: 7,
      title: "Camera Lens",
      price: 199.99,
      description: "High-quality camera lens",
      category: "electronics",
      image: img7,
      rating: {
        rate: 4.8,
        count: 90
      }
    },
    {
      id: 8,
      title: "Bluetooth Headsets",
      price: 49.99,
      description: "Wireless Bluetooth headsets",
      category: "electronics",
      image: img8,
      rating: {
        rate: 4.5,
        count: 160
      }
    },
    {
      id: 9,
      title: "Flash Drive",
      price: 12.99,
      description: "Reliable flash drive",
      category: "electronics",
      image: img9,
      rating: {
        rate: 4.3,
        count: 130
      }
    },
    {
      id: 10,
      title: "Headsets",
      price: 25.99,
      description: "Comfortable headsets",
      category: "electronics",
      image: img10,
      rating: {
        rate: 4.0,
        count: 200
      }
    },
    {
      id: 11,
      title: "Mono Headsets",
      price: 20.99,
      description: "Mono headsets for clear audio",
      category: "electronics",
      image: img11,
      rating: {
        rate: 4.1,
        count: 150
      }
    },
    {
      id: 12,
      title: "Mouse",
      price: 14.99,
      description: "Ergonomic mouse",
      category: "electronics",
      image: img12,
      rating: {
        rate: 4.4,
        count: 220
      }
    },
    {
      id: 13,
      title: "Phone Cases",
      price: 9.99,
      description: "Protective phone cases",
      category: "electronics",
      image: img13,
      rating: {
        rate: 4.2,
        count: 170
      }
    },
    {
      id: 14,
      title: "Power Banks",
      price: 19.99,
      description: "Portable power banks",
      category: "electronics",
      image: img14,
      rating: {
        rate: 4.5,
        count: 200
      }
    },
    {
      id: 15,
      title: "SD Card",
      price: 8.99,
      description: "High-capacity SD card",
      category: "electronics",
      image: img15,
      rating: {
        rate: 4.6,
        count: 190
      }
    },
    {
      id: 16,
      title: "Watch",
      price: 99.99,
      description: "Elegant wristwatch",
      category: "electronics",
      image: img16,
      rating: {
        rate: 4.7,
        count: 180
      }
    },
    {
      id: 17,
      title: "Xbox",
      price: 399.99,
      description: "Latest Xbox console",
      category: "electronics",
      image: img17,
      rating: {
        rate: 4.8,
        count: 250
      }
    },
    {
      id: 18,
      title: "External USB 2.0",
      price: 15.99,
      description: "External USB 2.0 storage",
      category: "electronics",
      image: img18,
      rating: {
        rate: 4.3,
        count: 100
      }
    },
    {
      id: 19,
      title: "Tablet Radiator",
      price: 25.99,
      description: "Efficient tablet radiator",
      category: "electronics",
      image: img19,
      rating: {
        rate: 4.5,
        count: 140
      }
    },
    {
      id: 20,
      title: "Cooling Fan",
      price: 10.99,
      description: "12V cooling fan",
      category: "electronics",
      image: img20,
      rating: {
        rate: 4.4,
        count: 120
      }
    },
    {
      id: 21,
      title: "Cooling Pad",
      price: 19.99,
      description: "Notebook cooling pad",
      category: "electronics",
      image: img21,
      rating: {
        rate: 4.6,
        count: 150
      }
    },
    {
      id: 22,
      title: "Tablet Cooler",
      price: 22.99,
      description: "Tablet cooler for devices",
      category: "electronics",
      image: img22,
      rating: {
        rate: 4.5,
        count: 130
      }
    },
    {
      id: 23,
      title: "Inverter",
      price: 49.99,
      description: "500W power supply inverter",
      category: "electronics",
      image: img23,
      rating: {
        rate: 4.7,
        count: 110
      }
    },
    {
      id: 24,
      title: "Micronics Cyclone",
      price: 29.99,
      description: "Micronics Cyclone fan",
      category: "electronics",
      image: img24,
      rating: {
        rate: 4.4,
        count: 90
      }
    },
    {
      id: 25,
      title: "Gaming Power Supply",
      price: 79.99,
      description: "600W gaming power supply",
      category: "electronics",
      image: img25,
      rating: {
        rate: 4.8,
        count: 130
      }
    },
    {
      id: 26,
      title: "4GB RAM",
      price: 29.99,
      description: "High-speed 4GB RAM",
      category: "electronics",
      image: img26,
      rating: {
        rate: 4.6,
        count: 160
      }
    },
    {
      id: 27,
      title: "External Sound Card",
      price: 12.99,
      description: "USB 2.0 external sound card",
      category: "electronics",
      image: img27,
      rating: {
        rate: 4.3,
        count: 110
      }
    },
    {
      id: 28,
      title: "USB Sound Card",
      price: 14.99,
      description: "External USB sound card",
      category: "electronics",
      image: img28,
      rating: {
        rate: 4.5,
        count: 90
      }
    },
    {
      id: 29,
      title: "Quadro Graphics Card",
      price: 99.99,
      description: "Quadro K600 graphics card",
      category: "electronics",
      image: img29,
      rating: {
        rate: 4.7,
        count: 140
      }
    },
    {
      id: 30,
      title: "GeForce Graphics Card",
      price: 129.99,
      description: "GeForce GT730 graphics card",
      category: "electronics",
      image: img30,
      rating: {
        rate: 4.6,
        count: 170
      }
    },
    {
      id: 31,
      title: "PCIe Riser",
      price: 25.99,
      description: "Mini PCIe to PCI Express riser",
      category: "electronics",
      image: img31,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 32,
      title: "Radeon Graphics Card",
      price: 109.99,
      description: "Radeon R5 340X graphics card",
      category: "electronics",
      image: img32,
      rating: {
        rate: 4.5,
        count: 120
      }
    },
    {
      id: 33,
      title: "Radeon R5 240",
      price: 89.99,
      description: "Radeon R5 240 graphics card",
      category: "electronics",
      image: img33,
      rating: {
        rate: 4.4,
        count: 130
      }
    },
    {
      id: 34,
      title: "Radeon HD8490",
      price: 119.99,
      description: "Radeon HD8490 graphics card",
      category: "electronics",
      image: img34,
      rating: {
        rate: 4.7,
        count: 150
      }
    },
    {
      id: 35,
      title: "Radeon HD8570",
      price: 139.99,
      description: "Radeon HD8570 graphics card",
      category: "electronics",
      image: img35,
      rating: {
        rate: 4.6,
        count: 110
      }
    },
    {
      id: 36,
      title: "Quadro P620",
      price: 149.99,
      description: "Quadro P620 graphics card",
      category: "electronics",
      image: img36,
      rating: {
        rate: 4.8,
        count: 120
      }
    },
    {
      id: 37,
      title: "PNY Quadro NVS315",
      price: 99.99,
      description: "PNY Quadro NVS315 graphics card",
      category: "electronics",
      image: img37,
      rating: {
        rate: 4.5,
        count: 140
      }
    },
    {
      id: 38,
      title: "Vacuum Cooler",
      price: 19.99,
      description: "Portable laptop vacuum cooler",
      category: "electronics",
      image: img38,
      rating: {
        rate: 4.4,
        count: 130
      }
    },
    {
      id: 39,
      title: "Mobile Cooling Fan",
      price: 9.99,
      description: "DL06 mobile cooling fan",
      category: "electronics",
      image: img39,
      rating: {
        rate: 4.3,
        count: 90
      }
    },
    {
      id: 40,
      title: "Phone Radiator",
      price: 15.99,
      description: "Tablet cooler and phone radiator",
      category: "electronics",
      image: img40,
      rating: {
        rate: 4.5,
        count: 110
      }
    },
    {
      id: 41,
      title: "Baseball Cap",
      price: 12.99,
      description: "Casual use baseball cap",
      category: "fashion",
      image: img41,
      rating: {
        rate: 4.2,
        count: 150
      }
    },
    {
      id: 42,
      title: "Cleaning Kit",
      price: 7.99,
      description: "Keyboard cleaning kit",
      category: "accessories",
      image: img42,
      rating: {
        rate: 4.3,
        count: 120
      }
    },
    {
      id: 43,
      title: "Lens Protector",
      price: 5.99,
      description: "Lens protector for iPhone 13",
      category: "accessories",
      image: img43,
      rating: {
        rate: 4.4,
        count: 100
      }
    },
    {
      id: 44,
      title: "Lens Cap",
      price: 6.99,
      description: "Lens back cap for Canon DSLR",
      category: "accessories",
      image: img44,
      rating: {
        rate: 4.5,
        count: 80
      }
    },
    {
      id: 45,
      title: "Electronic Cleaning Kit",
      price: 9.99,
      description: "7-in-1 electronic cleaning kit",
      category: "accessories",
      image: img45,
      rating: {
        rate: 4.4,
        count: 110
      }
    },
    {
      id: 46,
      title: "Wide-Angle Lens",
      price: 15.99,
      description: "Wide-angle macro lens for phones",
      category: "accessories",
      image: img46,
      rating: {
        rate: 4.6,
        count: 90
      }
    },
    {
      id: 47,
      title: "Phone Tripod",
      price: 19.99,
      description: "Flexible phone tripod stand",
      category: "accessories",
      image: img47,
      rating: {
        rate: 4.5,
        count: 70
      }
    },
    {
      id: 48,
      title: "Camera Strap",
      price: 7.99,
      description: "Adjustable camera strap",
      category: "accessories",
      image: img48,
      rating: {
        rate: 4.3,
        count: 60
      }
    },
    {
      id: 49,
      title: "Memory Card",
      price: 29.99,
      description: "64GB high-speed memory card",
      category: "accessories",
      image: img49,
      rating: {
        rate: 4.7,
        count: 80
      }
    },
    {
      id: 50,
      title: "Screen Cleaner",
      price: 5.99,
      description: "Screen cleaning kit for devices",
      category: "accessories",
      image: img50,
      rating: {
        rate: 4.4,
        count: 100
      }
    },

    {
      id: 51,
      title: "Lens canon",
      price: 5.99,
      description: "Lens Hood Canon for EF 50mm f 1.8 STM ES-68 ",
      category: "accessories",
      image: img51,
      rating: {
        rate: 4.4,
        count: 100
      }
    }
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
  setTimeout(() => {
    setData(productData);
    setFilter(productData);
    setLoading(false);
  }, 2000);
}, []);


  const Loading = () => (
    <>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </>
  );

  const handleAddToCart = (product) => {
    dispatch(addCart(product));
  };

  const ShowProducts = () => (
    <>
      {filter.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card h-100 text-center p-4">
            <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
            <div className="card-body">
              <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
              <p className="card-text lead fw-bold">${product.price}</p>
              <button 
                className="btn btn-outline-dark me-2" 
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Electronics</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
