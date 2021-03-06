import React from 'react'
import desktopImage from './assets/images/banner4.jpg';
import { Link } from 'react-router-dom'




export const Home = () => (
  <div>
  <header className="header_wrap"><div className="top-header d-none d-md-block">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-8">
                	<div className="header_topbar_info">
                    	<div className="header_offer">
                    		<span>Free Ground Shipping Over $250</span>
                        </div>
                        <div className="download_wrap">
                            <span className="mr-3">Download App</span>
                            <ul className="icon_list text-center text-lg-left"><li><a href="#"><i className="fab fa-apple"></i></a></li>
                                <li><a href="#"><i className="fab fa-android"></i></a></li>
                                <li><a href="#"><i className="fab fa-windows"></i></a></li>
                            </ul></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4">
                	<div className="d-flex align-items-center justify-content-center justify-content-md-end">
                        <div className="lng_dropdown">
                            <select name="countries" className="custome_select"><option value="en" data-image="assets/images/eng.png" data-title="English">English</option><option value="fn" data-image="assets/images/fn.png" data-title="France">France</option><option value="us" data-image="assets/images/us.png" data-title="United States">United States</option></select></div>
                        <div className="ml-3">
                            <select name="countries" className="custome_select"><option value="USD" data-title="USD">USD</option><option value="EUR" data-title="EUR">EUR</option><option value="GBR" data-title="GBR">GBR</option></select></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="middle-header dark_skin">
    	<div className="container">
        	<div className="nav_block">
                <a className="navbar-brand" href="index.html">
                    <img className="logo_light" src={require('./assets/images/images-logo_light.png')} alt="logo"/><img className="logo_dark" src={require('./assets/images/images-logo_dark.png')} alt="logo"/></a>
                <div className="contact_phone order-md-last">
                    <i className="linearicons-phone-wave"></i>
                    <span>123-456-7689</span>
                </div>
                <div className="product_search_form">
                    <form>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="custom_select">
                                    <select className="first_null"><option value="">All Category</option><option value="Dresses">Dresses</option><option value="Shirt-Tops">Shirt &amp; Tops</option><option value="T-Shirt">T-Shirt</option><option value="Pents">Pents</option><option value="Jeans">Jeans</option></select></div>
                            </div>
                            <input className="form-control" placeholder="Search Product..." required="" type="text"/><button type="submit" className="search_btn"><i className="linearicons-magnifier"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
    	<div className="container">
            <div className="row">
            	<div className="col-lg-3 col-md-4 col-sm-6 col-3">
                	<div className="categories_wrap">
                        <button type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" className="categories_btn">
                            <i className="linearicons-menu"></i><span>All Categories </span>
                        </button>
                        <div id="navCatContent" className="nav_cat navbar collapse">
                            <ul><li className="dropdown dropdown-mega-menu">
                                    <a className="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i className="flaticon-woman"></i> <span>Woman's</span></a>
                                    <div className="dropdown-menu">
                                        <ul className="mega-menu d-lg-flex"><li className="mega-menu-col col-lg-7">
                                                <ul className="d-lg-flex"><li className="mega-menu-col col-lg-6">
                                                        <ul><li className="dropdown-header">Featured Item</li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                        </ul></li>
                                                    <li className="mega-menu-col col-lg-6">
                                                        <ul><li className="dropdown-header">Popular Item</li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                        </ul></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-5">
                                                <div className="header-banner2">
                                                    <img src={require('./assets/images/images-menu_banner1.jpg')} alt="menu_banner1"/><div className="banne_info">
                                                        <h6>10% Off</h6>
                                                        <h4>New Arrival</h4>
                                                        <a href="#">Shop now</a>
                                                    </div>
                                                </div>
                                                <div className="header-banner2">
                                                    <img src={require('./assets/images/images-menu_banner2.jpg')} alt="menu_banner2"/><div className="banne_info">
                                                        <h6>15% Off</h6>
                                                        <h4>Men's Fashion</h4>
                                                        <a href="#">Shop now</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul></div>
                                </li>
                                <li className="dropdown dropdown-mega-menu">
                                    <a className="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i className="flaticon-boss"></i> <span>Men's</span></a>
                                    <div className="dropdown-menu">
                                        <ul className="mega-menu d-lg-flex"><li className="mega-menu-col col-lg-7">
                                                <ul className="d-lg-flex"><li className="mega-menu-col col-lg-6">
                                                        <ul><li className="dropdown-header">Featured Item</li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                        </ul></li>
                                                    <li className="mega-menu-col col-lg-6">
                                                        <ul><li className="dropdown-header">Popular Item</li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                        </ul></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-5">
                                                <div className="header-banner2">
                                                    <a href="#"><img src={require('./assets/images/images-menu_banner4.jpg')} alt="menu_banner4"/></a>
                                                </div>
                                            </li>
                                        </ul></div>
                                </li>
                                <li className="dropdown dropdown-mega-menu">
                                    <a className="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i className="flaticon-friendship"></i> <span>Kid's</span></a>
                                    <div className="dropdown-menu">
                                        <ul className="mega-menu d-lg-flex"><li className="mega-menu-col col-lg-7">
                                                <ul className="d-lg-flex"><li className="mega-menu-col col-lg-6">
                                                        <ul><li className="dropdown-header">Featured Item</li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                        </ul></li>
                                                    <li className="mega-menu-col col-lg-6">
                                                        <ul><li className="dropdown-header">Popular Item</li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                                        </ul></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-5">
                                                <div className="header-banner2">
                                                    <a href="#"><img src={require('./assets/images/images-menu_banner5.jpg')} alt="menu_banner5"/></a>
                                                </div>
                                            </li>
                                        </ul></div>
                                </li>
                                <li className="dropdown dropdown-mega-menu">
                                    <a className="dropdown-item nav-link dropdown-toggler" href="#" data-toggle="dropdown"><i className="flaticon-sunglasses"></i> <span>Accessories</span></a>
                                    <div className="dropdown-menu">
                                        <ul className="mega-menu d-lg-flex"><li className="mega-menu-col col-lg-4">
                                                <ul><li className="dropdown-header">Woman's</li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-three-columns.html">Vestibulum sed</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-four-columns.html">Donec porttitor</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-grid-view.html">Donec vitae facilisis</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-list-view.html">Curabitur tempus</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Vivamus in tortor</a></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-4">
                                                <ul><li className="dropdown-header">Men's</li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Donec vitae ante ante</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Etiam ac rutrum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">Quisque condimentum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="compare.html">Curabitur laoreet</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="cart-empty.html">Vivamus in tortor</a></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-4">
                                                <ul><li className="dropdown-header">Kid's</li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-accordion-style.html">Donec porttitor</a></li>
                                                </ul></li>
                                        </ul></div>
                                </li>
                                <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html"><i className="flaticon-jacket"></i> <span>Clothing</span></a></li>
                                <li><a className="dropdown-item nav-link nav_item" href="404.html"><i className="flaticon-sneakers"></i> <span>Shoes</span></a></li>
                                <li><a className="dropdown-item nav-link nav_item" href="login.html"><i className="flaticon-watch"></i> <span>Watches</span></a></li>
                                <li><a className="dropdown-item nav-link nav_item" href="register.html"><i className="flaticon-necklace"></i> <span>Jewellery</span></a></li>
                                <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html"><i className="flaticon-herbal"></i> <span>Health &amp; Beauty</span></a></li>
                                <li><a className="dropdown-item nav-link nav_item" href="404.html"><i className="flaticon-ball"></i> <span>Sports</span></a></li>
                                {/*<li>
                                	<ul className="more_slide_open"><li><a className="dropdown-item nav-link nav_item" href="login.html"><i className="flaticon-pijamas"></i> <span>Sleepwear</span></a></li>
                                        <li><a className="dropdown-item nav-link nav_item" href="register.html"><i className="flaticon-scarf"></i> <span>Seasonal Wear</span></a></li>
                                        <li><a className="dropdown-item nav-link nav_item" href="404.html"><i className="flaticon-vintage"></i> <span>Ethinic Wear</span></a></li>
                                        <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html"><i className="flaticon-pregnant"></i> <span>Baby Clothing</span></a></li>
                                    </ul></li>*/}
                            </ul>{/*<div className="more_categories">More Categories</div>*/}
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                	<nav className="navbar navbar-expand-lg"><button className="navbar-toggler side_navbar_toggler" type="button" data-toggle="collapse" data-target="#navbarSidetoggle" aria-expanded="false">
                            <span className="ion-android-menu"></span>
                        </button>
                        <div className="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                            <ul className="navbar-nav"><li className="dropdown">
                                    <Link data-toggle="dropdown" className="nav-link dropdown-toggle active" to="/">Home</Link>
{/*                                    <div className="dropdown-menu">
                                        <ul><li><a className="dropdown-item nav-link nav_item" href="index.html">Fashion 1</a></li>
                                            <li><a className="dropdown-item nav-link nav_item active" href="index-2.html">Fashion 2</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="index-3.html">Furniture 1</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="index-4.html">Furniture 2</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="index-5.html">Electronics 1</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="index-6.html">Electronics 2</a></li>
                                        </ul></div>*/}
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu">
                                        <ul><li><a className="dropdown-item nav-link nav_item" href="about.html">About Us</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="contact.html">Contact Us</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="faq.html">Faq</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="404.html">404 Error Page</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="login.html">Login</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="signup.html">Register</a></li>
                                            <li><a className="dropdown-item nav-link nav_item" href="term-condition.html">Terms and Conditions</a></li>
                                        </ul></div>
                                </li>
                                <li className="dropdown dropdown-mega-menu">
                                    <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Products</a>
                                    <div className="dropdown-menu">
                                        <ul className="mega-menu d-lg-flex"><li className="mega-menu-col col-lg-3">
                                                <ul><li className="dropdown-header">Woman's</li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-three-columns.html">Vestibulum sed</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-four-columns.html">Donec porttitor</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-grid-view.html">Donec vitae facilisis</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-list-view.html">Curabitur tempus</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Vivamus in tortor</a></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-3">
                                                <ul><li className="dropdown-header">Men's</li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Donec vitae ante ante</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Etiam ac rutrum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">Quisque condimentum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="compare.html">Curabitur laoreet</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="cart-empty.html">Vivamus in tortor</a></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-3">
                                                <ul><li className="dropdown-header">Kid's</li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-accordion-style.html">Donec porttitor</a></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-3">
                                                <ul><li className="dropdown-header">Accessories</li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Curabitur tempus</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Vivamus in tortor</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae facilisis</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-accordion-style.html">Donec porttitor</a></li>
                                                </ul></li>
                                        </ul><div className="d-lg-flex menu_banners">
                                            <div className="col-lg-6">
                                                <div className="header-banner">
                                                    <img src={require('./assets/images/images-menu_banner1.jpg')} alt="menu_banner1"/><div className="banne_info">
                                                        <h6>10% Off</h6>
                                                        <h4>New Arrival</h4>
                                                        <a href="#">Shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="header-banner">
                                                    <img src={require('./assets/images/images-menu_banner2.jpg')} alt="menu_banner2"/><div className="banne_info">
                                                        <h6>15% Off</h6>
                                                        <h4>Men's Fashion</h4>
                                                        <a href="#">Shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Blog</a>
                                    <div className="dropdown-menu dropdown-reverse">
                                        <ul><li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="#">Grids</a>
                                                <div className="dropdown-menu">
                                                    <ul><li><a className="dropdown-item nav-link nav_item" href="blog-three-columns.html">3 columns</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-four-columns.html">4 columns</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-right-sidebar.html">right Sidebar</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-standard-left-sidebar.html">Standard Left Sidebar</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-standard-right-sidebar.html">Standard right Sidebar</a></li>
                                                    </ul></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="#">Masonry</a>
                                                <div className="dropdown-menu">
                                                    <ul><li><a className="dropdown-item nav-link nav_item" href="blog-masonry-three-columns.html">3 columns</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-four-columns.html">4 columns</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-masonry-right-sidebar.html">right Sidebar</a></li>
                                                    </ul></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="#">Single Post</a>
                                                <div className="dropdown-menu">
                                                    <ul><li><a className="dropdown-item nav-link nav_item" href="blog-single.html">Default</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-single-left-sidebar.html">left sidebar</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-single-slider.html">slider post</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-single-video.html">video post</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-single-audio.html">audio post</a></li>
                                                    </ul></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item menu-link dropdown-toggler" href="#">List</a>
                                                <div className="dropdown-menu">
                                                    <ul><li><a className="dropdown-item nav-link nav_item" href="blog-list-left-sidebar.html">left sidebar</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="blog-list-right-sidebar.html">right sidebar</a></li>
                                                    </ul></div>
                                            </li>
                                        </ul></div>
                                </li>
                                <li className="dropdown dropdown-mega-menu">
                                    <Link className="dropdown-toggle nav-link" to="/shop-list-left-sidebar" data-toggle="dropdown">Shop</Link>
                                    <div className="dropdown-menu">
                                        <ul className="mega-menu d-lg-flex"><li className="mega-menu-col col-lg-9">
                                                <ul className="d-lg-flex"><li className="mega-menu-col col-lg-4">
                                                        <ul><li className="dropdown-header">Shop Page Layout</li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-list.html">shop List view</a></li>
                                                            <li><Link className="dropdown-item nav-link nav_item" to="/shop-list-left-sidebar">shop List Left Sidebar</Link></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-list-right-sidebar.html">shop List Right Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-load-more.html">Shop Load More</a></li>
                                                        </ul></li>
                                                    <li className="mega-menu-col col-lg-4">
                                                        <ul><li className="dropdown-header">Other Pages</li>
                                                            <li><Link className="dropdown-item nav-link nav_item" to="/shop-cart">Cart</Link></li>
                                                            <li><Link className="dropdown-item nav-link nav_item" to="/checkout">Checkout</Link></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">Wishlist</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="compare.html">compare</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="order-completed.html">Order Completed</a></li>
                                                        </ul></li>
                                                    <li className="mega-menu-col col-lg-4">
                                                        <ul><li className="dropdown-header">Product Pages</li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Default</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Right Sidebar</a></li>
                                                            <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Thumbnails Left</a></li>
                                                        </ul></li>
                                                </ul></li>
                                            <li className="mega-menu-col col-lg-3">
                                                <div className="header_banner">
                                                    <div className="header_banner_content">
                                                        <div className="shop_banner">
                                                            <div className="banner_img overlay_bg_40">
                                                                <img src={require('./assets/images/images-shop_banner2.jpg')} alt="shop_banner2"/></div>
                                                            <div className="shop_bn_content">
                                                                <h6 className="text-uppercase shop_subtitle">New Collection</h6>
                                                                <h5 className="text-uppercase shop_title">Sale 30% Off</h5>
                                                                <a href="#" className="btn btn-white rounded-0 btn-xs text-uppercase">Shop Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul></div>
                                </li>
                                <li><a className="nav-link nav_item" href="contact.html">Contact Us</a></li>
                            </ul></div>
                        <ul className="navbar-nav attr-nav align-items-center"><li><Link to="/login" className="nav-link"><i className="linearicons-user"></i></Link></li>
                            <li><a href="#" className="nav-link"><i className="linearicons-heart"></i><span className="wishlist_count">0</span></a></li>
                            <li className="dropdown cart_dropdown"><Link className="nav-link cart_trigger" to="/shop-cart" data-toggle="dropdown"><i className="linearicons-cart"></i><span className="cart_count">2</span></Link>
                                <div className="cart_box dropdown-menu dropdown-menu-right">
                                    <ul className="cart_list"><li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src={require('./assets/images/images-cart_thamb1.jpg')} alt="cart_thumb1"/>Variable product 001</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>78.00</span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src={require('./assets/images/images-cart_thamb2.jpg')} alt="cart_thumb2"/>Ornare sed consequat</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>81.00</span>
                                        </li>
                                    </ul><div className="cart_footer">
                                        <p className="cart_total"><strong>Subtotal:</strong> <span className="cart_price"> <span className="price_symbole">$</span></span>159.00</p>
                                        <p className="cart_buttons"><a href="#" className="btn btn-fill-line view-cart">View Cart</a><a href="#" className="btn btn-fill-out checkout">Checkout</a></p>
                                    </div>
                                </div>
                            </li>
                        </ul><div className="pr_search_icon">
                        	<a href="javascript:void(0);" className="nav-link pr_search_trigger"><i className="linearicons-magnifier"></i></a>
                        </div>
                    </nav></div>
            </div>
        </div>
    </div>
</header>
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
	<div className="container">
    	<div className="row">
        	<div className="col-lg-9 offset-lg-3">
                <div id="carouselExampleControls" className="carousel slide light_arrow" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active background_bg" style={{backgroundImage: `url(${desktopImage})` }}>
                            <div className="banner_slide_content banner_content_inner">
                                <div className="col-lg-8 col-10">
                                    <div className="banner_content overflow-hidden">
                                        <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Get up to 50% off Today Only!</h5>
                                        <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Woman Fashion</h2>
                                        <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" data-img-src="assets/images/banner5.jpg">
                            <div className="banner_slide_content banner_content_inner">
                                <div className="col-lg-8 col-10">
                                    <div className="banner_content overflow-hidden">
                                        <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">50% off in all products</h5>
                                        <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Man Fashion</h2>
                                        <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" data-img-src="assets/images/banner6.jpg">
                            <div className="banner_slide_content banner_content_inner">
                                <div className="col-lg-8 col-10">
                                    <div className="banner_content overflow-hidden">
                                        <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Taking your Viewing Experience to Next Level</h5>
                                        <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Summer Sale</h2>
                                        <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<ol className="carousel-indicators indicators_style1"><li data-target="#carouselExampleControls" data-slide-to="0" className="active">
                        </li><li data-target="#carouselExampleControls" data-slide-to="1">
                        </li><li data-target="#carouselExampleControls" data-slide-to="2">
                    </li></ol>*/}
                    </div>
            </div>
        </div>
    </div>
</div>
<div className="main_content">

<div className="section small_pb">
	<div className="container">
		<div className="row">
			<div className="col-12">
            	<div className="heading_tab_header">
                    <div className="heading_s2">
                        <h2>Exclusive Products</h2>
                    </div>
                    <div className="tab-style2">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tabmenubar" aria-expanded="false">
                            <span className="ion-android-menu"></span>
                        </button>
                        {/*<ul className="nav nav-tabs justify-content-center justify-content-md-end" id="tabmenubar" role="tablist"><li className="nav-item">
                                <a className="nav-link active" id="arrival-tab" data-toggle="tab" href="#arrival" role="tab" aria-controls="arrival" aria-selected="true">New Arrival</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="sellers-tab" data-toggle="tab" href="#sellers" role="tab" aria-controls="sellers" aria-selected="false">Best Sellers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false">Featured</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="special-tab" data-toggle="tab" href="#special" role="tab" aria-controls="special" aria-selected="false">Special Offer
    </a>
                            </li>
                        </ul>*/}
                        </div>
                </div>
            </div>
		</div>
        <div className="row">
        	<div className="col-12">
                <div className="tab_slider">
                	<div className="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                        <div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"{"}"0":{"{"}"items": "1"{"}"}, "481":{"{"}"items": "2"{"}"}
  , "768":{"{"}"items": "3"{"}"}, "1199":{"{"}"items": "4"{"}"}
  {"}"}'>
                    <div className="row">
                    <div className="col-3">
                            <div className="item">
                                <div className="product">
                                    <div className="product_img">
                                        <Link to="/shop-product-detail">
                                            <img src={require("./assets/images/images-product_img1.jpg")} alt="product_img1"/></Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul></div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to="/shop-product-detail">Blue Dress For Woman</Link></h6>
                                        <div className="product_price">
                                            <span className="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="item">
                                <div className="product">
                                    <div className="product_img">
                                        <Link to="/shop-product-detail">
                                            <img src={require("./assets/images/images-product_img2.jpg")} alt="product_img2"/></Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul></div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to="/shop-product-detail">Lether Gray Tuxedo</Link></h6>
                                        <div className="product_price">
                                            <span className="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div className="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:'68%'}}></div>
                                            </div>
                                            <span className="rating_num">(15)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#847764"></span>
                                                <span data-color="#0393B5"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="item">
                                <div className="product">
                                    <span className="pr_flash">New</span>
                                    <div className="product_img">
                                        <Link to="shop-product-detail.html">
                                            <img src={require("./assets/images/images-product_img3.jpg")} alt="product_img3"/></Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul></div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to="/shop-product-detail">woman full sliv dress</Link></h6>
                                        <div className="product_price">
                                            <span className="price">$68.00</span>
                                            <del>$99.00</del>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:'87%'}}></div>
                                            </div>
                                            <span className="rating_num">(25)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#7C502F"></span>
                                                <span data-color="#2F366C"></span>
                                                <span data-color="#874A3D"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="item">
                                <div className="product">
                                    <div className="product_img">
                                        <Link to="/shop-product-detail">
                                            <img src={require("./assets/images/images-product_img4.jpg")} alt="product_img4"/></Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul></div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to="/shop-product-detail">light blue Shirt</Link></h6>
                                        <div className="product_price">
                                            <span className="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:'70%'}}></div>
                                            </div>
                                            <span className="rating_num">(22)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#A92534"></span>
                                                <span data-color="#B9C2DF"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="item">
                                <div className="product">
                                    <div className="product_img">
                                        <Link to="/shop-product-detail">
                                            <img src={require("./assets/images/images-product_img5.jpg")} alt="product_img5"/></Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul></div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to="/shop-product-detail">blue dress for woman</Link></h6>
                                        <div className="product_price">
                                            <span className="price">$45.00</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:'80%'}}></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#5FB7D4"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="item">
                                <div className="product">
                                    <span className="pr_flash bg-danger">Hot</span>
                                    <div className="product_img">
                                        <Link to="/shop-product-detail">
                                            <img src={require("./assets/images/images-product_img6.jpg")} alt="product_img6"/></Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul></div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to="/shop-product-detail">Blue casual check shirt</Link></h6>
                                        <div className="product_price">
                                            <span className="price">$55.00</span>
                                            <del>$95.00</del>
                                            <div className="on_sale">
                                                <span>25% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:'68%'}}></div>
                                            </div>
                                            <span className="rating_num">(15)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#87554B"></span>
                                                <span data-color="#333333"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="item">
                                <div className="product">
                                    <span className="pr_flash bg-success">Sale</span>
                                    <div className="product_img">
                                        <Link to="/shop-product-detail">
                                            <img src={require("./assets/images/images-product_img7.jpg")} alt="product_img7"/></Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul></div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to="/shop-product-detail">white black line dress</Link></h6>
                                        <div className="product_price">
                                            <span className="price">$68.00</span>
                                            <del>$99.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:'87%'}}></div>
                                            </div>
                                            <span className="rating_num">(25)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#7C502F"></span>
                                                <span data-color="#2F366C"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-3">
                            <div className="item">
                                <div className="product">
                                    <div className="product_img">
                                        <Link to="/shop-product-detail">
                                            <img src={require("./assets/images/images-product_img8.jpg")} alt="product_img8"/></Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul></div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to="/shop-product-detail">Men blue jins Shirt</Link></h6>
                                        <div className="product_price">
                                            <span className="price">$69.00</span>
                                            <del>$89.00</del>
                                            <div className="on_sale">
                                                <span>20% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:'70%'}}></div>
                                            </div>
                                            <span className="rating_num">(22)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active" data-color="#333333"></span>
                                                <span data-color="#444653"></span>
                                                <span data-color="#B9C2DF"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="section pb_20 small_pt">
	<div className="container">
    	<div className="row">
        	<div className="col-md-6">
            	<div className="single_banner">
                	<img src={require("./assets/images/images-shop_banner_img1.jpg")} alt="shop_banner_img1"/><div className="single_banner_info">
                        <h5 className="single_bn_title1">Super Sale</h5>
                        <h3 className="single_bn_title">New Collection</h3>
                        <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
            	<div className="single_banner">
                	<img src={require("./assets/images/images-shop_banner_img2.jpg")} alt="shop_banner_img2"/><div className="single_banner_info">
                        <h3 className="single_bn_title">New Season</h3>
                        <h4 className="single_bn_title1">Sale 40% Off</h4>
                        <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="section small_pt small_pb">
	<div className="container">
    	<div className="row">
			<div className="col-md-12">
            	<div className="heading_tab_header">
                    <div className="heading_s2">
                        <h2>Deal Of The Days</h2>
                    </div>
                    <div className="deal_timer">
                    	<div className="countdown_time countdown_style1" data-time="2020/08/28 13:22:15"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            	<div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
                	<div className="row">
                	<div className="col-3">
                	<div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img1.jpg")} alt="product_img1"/></Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul></div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Blue Dress For Woman</Link></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'80%'}}></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#87554B"></span>
                                        <span data-color="#333333"></span>
                                        <span data-color="#DA323F"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img2.jpg")} alt="product_img2"/></Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul></div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Lether Gray Tuxedo</Link></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'68%'}}></div>
                                    </div>
                                    <span className="rating_num">(15)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#847764"></span>
                                        <span data-color="#0393B5"></span>
                                        <span data-color="#DA323F"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="item">
                        <div className="product">
                            <span className="pr_flash">New</span>
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img3.jpg")} alt="product_img3"/></Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul></div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">woman full sliv dress</Link></h6>
                                <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'87%'}}></div>
                                    </div>
                                    <span className="rating_num">(25)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#333333"></span>
                                        <span data-color="#7C502F"></span>
                                        <span data-color="#2F366C"></span>
                                        <span data-color="#874A3D"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img4.jpg")} alt="product_img4"/></Link>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul></div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">light blue Shirt</Link></h6>
                                <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'70%'}}></div>
                                    </div>
                                    <span className="rating_num">(22)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#333333"></span>
                                        <span data-color="#A92534"></span>
                                        <span data-color="#B9C2DF"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/*<div className="col-3">
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img5.jpg")} alt="product_img5"/></a>
                                <div className="product_action_box">
                                    <ul className="list_none pr_action_btn"><li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                    </ul></div>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">blue dress for woman</a></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'80%'}}></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                                <div className="pr_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                </div>
                                <div className="pr_switch_wrap">
                                    <div className="product_color_switch">
                                        <span className="active" data-color="#87554B"></span>
                                        <span data-color="#333333"></span>
                                        <span data-color="#5FB7D4"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>*/}
                    </div>
                </div>
            </div>
		</div>
    </div>
</div>
<div className="section pb_20 small_pt">
	<div className="container-fluid px-2">
    	<div className="row no-gutters">
        	<div className="col-md-4">
            	<div className="sale_banner">
                	<a className="hover_effect1" href="#">
                		<img src={require("./assets/images/images-shop_banner_img3.jpg")} alt="shop_banner_img3"/></a>
                </div>
            </div>
            <div className="col-md-4">
            	<div className="sale_banner">
                	<a className="hover_effect1" href="#">
                		<img src={require("./assets/images/images-shop_banner_img4.jpg")} alt="shop_banner_img4"/></a>
                </div>
            </div>
            <div className="col-md-4">
            	<div className="sale_banner">
                	<a className="hover_effect1" href="#">
                		<img src={require("./assets/images/images-shop_banner_img5.jpg")} alt="shop_banner_img5"/></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="section small_pt pb_20">
	<div className="container">
    	<div className="row">
			<div className="col-md-12">
            	<div className="heading_tab_header">
                    <div className="heading_s2">
                        <h2>Featured Products</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            	<div className="product_slider product_list carousel_slider owl-carousel owl-theme nav_style3" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "767":{"items": "2"}, "991":{"items": "3"}, "1199":{"items": "3"}}'>
                	<div className="row">
                	<div className="col-4">
                	<div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img1.jpg")} alt="product_img1"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Blue Dress For Woman</Link></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'80%'}}></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img6.jpg")} alt="product_img6"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Blue casual check shirt</Link></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'68%'}}></div>
                                    </div>
                                    <span className="rating_num">(15)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img12.jpg")} alt="product_img12"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Black T-shirt for woman</Link></h6>
                                <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'70%'}}></div>
                                    </div>
                                    <span className="rating_num">(22)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img2.jpg")} alt="product_img2"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Lether Gray Tuxedo</Link></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'68%'}}></div>
                                    </div>
                                    <span className="rating_num">(15)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img7.jpg")} alt="product_img7"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">white black line dress</Link></h6>
                                <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'87%'}}></div>
                                    </div>
                                    <span className="rating_num">(25)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img10.jpg")} alt="product_img10"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Red &amp; Black check shirt</Link></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$95.00</del>
                                    <div className="on_sale">
                                        <span>25% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'68%'}}></div>
                                    </div>
                                    <span className="rating_num">(15)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img3.jpg")} alt="product_img3"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">woman full sliv dress</Link></h6>
                                <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'87%'}}></div>
                                    </div>
                                    <span className="rating_num">(25)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img8.jpg")} alt="product_img8"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Men blue jins Shirt</Link></h6>
                                <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'70%'}}></div>
                                    </div>
                                    <span className="rating_num">(22)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img13.jpg")} alt="product_img13"/></Link>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Pink Dress for woman</Link></h6>
                                <div className="product_price">
                                    <span className="price">$65.00</span>
                                    <del>$80.00</del>
                                    <div className="on_sale">
                                        <span>30% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'80%'}}></div>
                                    </div>
                                    <span className="rating_num">(28)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/*<div className="col-4">
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img4.jpg")} alt="product_img4"/></a>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">light blue Shirt</a></h6>
                                <div className="product_price">
                                    <span className="price">$69.00</span>
                                    <del>$89.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'70%'}}></div>
                                    </div>
                                    <span className="rating_num">(22)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img9.jpg")} alt="product_img9"/></a>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">T-Shirt Form Girls</a></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'80%'}}></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img14.jpg")} alt="product_img14"/></a>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">White shirt for man</a></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$60.00</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'68%'}}></div>
                                    </div>
                                    <span className="rating_num">(15)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>*/}
                    {/*<div className="col-4">
                    <div className="item">
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img5.jpg")} alt="product_img5"/></a>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">blue dress for woman</a></h6>
                                <div className="product_price">
                                    <span className="price">$45.00</span>
                                    <del>$55.25</del>
                                    <div className="on_sale">
                                        <span>35% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'80%'}}></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img11.jpg")} alt="product_img11"/></a>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Black dress for woman</a></h6>
                                <div className="product_price">
                                    <span className="price">$68.00</span>
                                    <del>$99.00</del>
                                    <div className="on_sale">
                                        <span>20% Off</span>
                                    </div>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'87%'}}></div>
                                    </div>
                                    <span className="rating_num">(25)</span>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product_img">
                                <Link to="/shop-product-detail">
                                    <img src={require("./assets/images/images-product_img15.jpg")} alt="product_img15"/></a>
                            </div>
                            <div className="product_info">
                                <h6 className="product_title"><Link to="/shop-product-detail">Pink Dress for Baby Kids</a></h6>
                                <div className="product_price">
                                    <span className="price">$55.00</span>
                                    <del>$60.00</del>
                                </div>
                                <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:'68%'}}></div>
                                    </div>
                                    <span className="rating_num">(15)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>*/}
                    </div>
                </div>
            </div>
		</div>
    </div>
</div>
<div className="section small_pt">
	<div className="container">
    	<div className="row">
			<div className="col-md-12">
            	<div className="heading_tab_header">
                    <div className="heading_s2">
                        <h2>Our Brands</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
        	<div className="col-12">
            	<div className="client_logo carousel_slider owl-carousel owl-theme nav_style3" data-dots="false" data-nav="true" data-margin="30" data-loop="true" data-autoplay="true" data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}'>
                	<div className="row">
                	<div className="col-2">
                	<div className="item">
                    	<div className="cl_logo">
                        	<img src={require("./assets/images/images-cl_logo1.png")} alt="cl_logo"/></div>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="item">
                        <div className="cl_logo">
                        	<img src={require("./assets/images/images-cl_logo2.png")} alt="cl_logo"/></div>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="item">
                        <div className="cl_logo">
                        	<img src={require("./assets/images/images-cl_logo3.png")} alt="cl_logo"/></div>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="item">
                        <div className="cl_logo">
                        	<img src={require("./assets/images/images-cl_logo4.png")} alt="cl_logo"/></div>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="item">
                        <div className="cl_logo">
                        	<img src={require("./assets/images/images-cl_logo5.png")} alt="cl_logo"/></div>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="item">
                        <div className="cl_logo">
                        	<img src={require("./assets/images/images-cl_logo6.png")} alt="cl_logo"/></div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="section bg_dark small_pt small_pb">
	<div className="container">
    	<div className="row align-items-center">
            <div className="col-md-6">
                <div className="heading_s1 mb-md-0 heading_light">
                    <h3>Subscribe Our Newsletter</h3>
                </div>
            </div>
            <div className="col-md-6">
                <div className="newsletter_form">
                    <form>
                        <input type="text" required="" className="form-control rounded-0" placeholder="Enter Email Address"/><button type="submit" className="btn btn-fill-out rounded-0" name="submit" value="Submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
<footer className="bg_gray"><div className="footer_top small_pt pb_20">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                	<div className="widget">
                        <div className="footer_logo">
                            <a href="#"><img src={require("./assets/images/images-logo_dark.png")} alt="logo"/></a>
                        </div>
                        <p className="mb-3">If you are going to use of Lorem Ipsum need to be sure there isn't anything hidden of text</p>
                        <ul className="contact_info"><li>
                                <i className="ti-location-pin"></i>
                                <p>123 Street, Old Trafford, NewYork, USA</p>
                            </li>
                            <li>
                                <i className="ti-email"></i>
                                <a href="/cdn-cgi/l/email-protection#c1a8afa7ae81b2a8b5a4afa0aca4efa2aeac"><span className="__cf_email__" data-cfemail="0a63646c654a79637e6f646b676f24696567">[email&#160;protected]</span></a>
                            </li>
                            <li>
                                <i className="ti-mobile"></i>
                                <p>+ 457 789 789 65</p>
                            </li>
                        </ul></div>
        		</div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">Useful Links</h6>
                        <ul className="widget_links"><li><a href="#">About Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Location</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul></div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">My Account</h6>
                        <ul className="widget_links"><li><a href="#">My Account</a></li>
                            <li><a href="#">Discount</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Orders History</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ul></div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                	<div className="widget">
                        <h6 className="widget_title">Instagram</h6>
                        <ul className="widget_instafeed instafeed_col4"><li><a href="#"><img src={require("./assets/images/images-insta_img1.jpg")} alt="insta_img"/><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img2.jpg")} alt="insta_img"/><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img3.jpg")} alt="insta_img"/><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img4.jpg")} alt="insta_img"/><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img5.jpg")} alt="insta_img"/><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img6.jpg")} alt="insta_img"/><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img7.jpg")} alt="insta_img"/><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img8.jpg")} alt="insta_img"/><span className="insta_icon"><i className="ti-instagram"></i></span></a></li>
                        </ul></div>
                </div>
            </div>
        </div>
    </div>
    <div className="middle_footer">
    	<div className="container">
        	<div className="row">
            	<div className="col-12">
                	<div className="shopping_info">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="icon_box icon_box_style2">
                                    <div className="icon">
                                        <i className="flaticon-shipped"></i>
                                    </div>
                                    <div className="icon_box_content">
                                    	<h5>Free Delivery</h5>
                                        <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="icon_box icon_box_style2">
                                    <div className="icon">
                                        <i className="flaticon-money-back"></i>
                                    </div>
                                    <div className="icon_box_content">
                                    	<h5>30 Day Returns Guarantee</h5>
                                        <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="icon_box icon_box_style2">
                                    <div className="icon">
                                        <i className="flaticon-support"></i>
                                    </div>
                                    <div className="icon_box_content">
                                    	<h5>27/4 Online Support</h5>
                                        <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bottom_footer border-top-tran">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <p className="mb-lg-0 text-center">&copy; 2020 All Rights Reserved by Bestwebcreator</p>
                </div>
                <div className="col-lg-4 order-lg-first">
                	<div className="widget mb-lg-0">
                        <ul className="social_icons text-center text-lg-left"><li><a href="#" className="sc_facebook"><i className="ion-social-facebook"></i></a></li>
                            <li><a href="#" className="sc_twitter"><i className="ion-social-twitter"></i></a></li>
                            <li><a href="#" className="sc_google"><i className="ion-social-googleplus"></i></a></li>
                            <li><a href="#" className="sc_youtube"><i className="ion-social-youtube-outline"></i></a></li>
                            <li><a href="#" className="sc_instagram"><i className="ion-social-instagram-outline"></i></a></li>
                        </ul></div>
                </div>
                <div className="col-lg-4">
                    <ul className="footer_payment text-center text-lg-right"><li><a href="#"><img src={require("./assets/images/images-visa.png")} alt="visa"/></a></li>
                        <li><a href="#"><img src={require("./assets/images/images-discover.png")} alt="discover"/></a></li>
                        <li><a href="#"><img src={require("./assets/images/images-master_card.png")} alt="master_card"/></a></li>
                        <li><a href="#"><img src={require("./assets/images/images-paypal.png")} alt="paypal"/></a></li>
                        <li><a href="#"><img src={require("./assets/images/images-amarican_express.png")} alt="amarican_express"/></a></li>
                    </ul></div>
            </div>
        </div>
    </div>
</footer>
  </div>
)
