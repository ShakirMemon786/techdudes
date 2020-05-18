import React from 'react'
import { Link } from 'react-router-dom'


export const Shoplistleftsidebar = () => (
  <div>
  <div
    className="modal fade subscribe_popup"
    id="onload-popup"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-lg modal-dialog-centered"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="ion-ios-close-empty" />
            </span>
          </button>
          <div className="row no-gutters">
            <div className="col-sm-5">
              <div
                className="background_bg h-100"
                data-img-src={require('./assets/images/popup_img.jpg')}
              />
            </div>
            <div className="col-sm-7">
              <div className="popup_content">
                <div className="popup-text">
                  <div className="heading_s4">
                    <h4>Subscribe and Get 25% Discount!</h4>
                  </div>
                  <p>
                    Subscribe to the newsletter to receive updates about new
                    products.
                  </p>
                </div>
                <form method="post">
                  <div className="form-group">
                    <input
                      name="email"
                      required
                      type="email"
                      className="form-control rounded-0"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-fill-line btn-block text-uppercase rounded-0"
                      title="Subscribe"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <div className="chek-form">
                  <div className="custome-checkbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="exampleCheckbox3"
                      defaultValue
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox3"
                    >
                      <span>Don't show this popup again!</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Screen Load Popup Section */}
  {/* START HEADER */}
  <header className="header_wrap fixed-top header_with_topbar">
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <div className="lng_dropdown mr-2">
                <select name="countries" className="custome_select">
                  <option
                    value="en"
                    data-image="assets/images/eng.png"
                    data-title="English"
                  >
                    English
                  </option>
                  <option
                    value="fn"
                    data-image="assets/images/fn.png"
                    data-title="France"
                  >
                    France
                  </option>
                  <option
                    value="us"
                    data-image="assets/images/us.png"
                    data-title="United States"
                  >
                    United States
                  </option>
                </select>
              </div>
              <div className="mr-3">
                <select name="countries" className="custome_select">
                  <option value="USD" data-title="USD">
                    USD
                  </option>
                  <option value="EUR" data-title="EUR">
                    EUR
                  </option>
                  <option value="GBR" data-title="GBR">
                    GBR
                  </option>
                </select>
              </div>
              <ul className="contact_detail text-center text-lg-left">
                <li>
                  <i className="ti-mobile" />
                  <span>123-456-7890</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-right">
              <ul className="header_list">
                <li>
                  <a href="compare.html">
                    <i className="ti-control-shuffle" />
                    <span>Compare</span>
                  </a>
                </li>
                <li>
                  <a href="wishlist.html">
                    <i className="ti-heart" />
                    <span>Wishlist</span>
                  </a>
                </li>
                <li>
                  <Link to="/login">
                    <i className="ti-user" />
                    <span>Login</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom_header dark_skin main_menu_uppercase">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="index.html">
            <img
              className="logo_light"
              src={require("./assets/images/images-logo_light.png")}
              alt="logo"
            />
            <img
              className="logo_dark"
              src={require("./assets/images/images-logo_dark.png")}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
          >
            <span className="ion-android-menu" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="dropdown">
                <Link
                  data-toggle="dropdown"
                  className="nav-link dropdown-toggle"
                  to="/"
                >
                  Home
                </Link>
                {/*<div className="dropdown-menu">
                  <ul>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="index.html"
                      >
                        Fashion 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="index-2.html"
                      >
                        Fashion 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="index-3.html"
                      >
                        Furniture 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="index-4.html"
                      >
                        Furniture 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="index-5.html"
                      >
                        Electronics 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="index-6.html"
                      >
                        Electronics 2
                      </a>
                    </li>
                  </ul>
                </div>*/}
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-toggle nav-link active"
                  href="#"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="about.html"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="contact.html"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="faq.html"
                      >
                        Faq
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="404.html"
                      >
                        404 Error Page
                      </a>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item nav-link nav_item active"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="signup.html"
                      >
                        Register
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="term-condition.html"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown dropdown-mega-menu">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  Products
                </a>
                <div className="dropdown-menu">
                  <ul className="mega-menu d-lg-flex">
                    <li className="mega-menu-col col-lg-3">
                      <ul>
                        <li className="dropdown-header">Woman's</li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-three-columns.html"
                          >
                            Vestibulum sed
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-four-columns.html"
                          >
                            Donec porttitor
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-grid-view.html"
                          >
                            Donec vitae facilisis
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-list-view.html"
                          >
                            Curabitur tempus
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-left-sidebar.html"
                          >
                            Vivamus in tortor
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-col col-lg-3">
                      <ul>
                        <li className="dropdown-header">Men's</li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-cart.html"
                          >
                            Donec vitae ante ante
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="checkout.html"
                          >
                            Etiam ac rutrum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="wishlist.html"
                          >
                            Quisque condimentum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="compare.html"
                          >
                            Curabitur laoreet
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="cart-empty.html"
                          >
                            Vivamus in tortor
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-col col-lg-3">
                      <ul>
                        <li className="dropdown-header">Kid's</li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail.html"
                          >
                            Donec vitae facilisis
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-left-sidebar.html"
                          >
                            Quisque condimentum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-right-sidebar.html"
                          >
                            Etiam ac rutrum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-thumbnails-left.html"
                          >
                            Donec vitae ante ante
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-accordion-style.html"
                          >
                            Donec porttitor
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-col col-lg-3">
                      <ul>
                        <li className="dropdown-header">Accessories</li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail.html"
                          >
                            Curabitur tempus
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-left-sidebar.html"
                          >
                            Quisque condimentum
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-right-sidebar.html"
                          >
                            Vivamus in tortor
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-thumbnails-left.html"
                          >
                            Donec vitae facilisis
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item nav-link nav_item"
                            href="shop-product-detail-accordion-style.html"
                          >
                            Donec porttitor
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="d-lg-flex menu_banners">
                    <div className="col-sm-4">
                      <div className="header-banner">
                        <img
                          src={require("./assets/images/images-menu_banner1.jpg")}
                          alt="menu_banner1"
                        />
                        <div className="banne_info">
                          <h6>10% Off</h6>
                          <h4>New Arrival</h4>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="header-banner">
                        <img
                          src={require("./assets/images/images-menu_banner2.jpg")}
                          alt="menu_banner2"
                        />
                        <div className="banne_info">
                          <h6>15% Off</h6>
                          <h4>Men's Fashion</h4>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="header-banner">
                        <img
                          src={require("./assets/images/images-menu_banner3.jpg")}
                          alt="menu_banner3"
                        />
                        <div className="banne_info">
                          <h6>23% Off</h6>
                          <h4>Kids Fashion</h4>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  Blog
                </a>
                <div className="dropdown-menu dropdown-reverse">
                  <ul>
                    <li>
                      <a
                        className="dropdown-item menu-link dropdown-toggler"
                        href="#"
                      >
                        Grids
                      </a>
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-three-columns.html"
                            >
                              3 columns
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-four-columns.html"
                            >
                              4 columns
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-right-sidebar.html"
                            >
                              right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-standard-left-sidebar.html"
                            >
                              Standard Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-standard-right-sidebar.html"
                            >
                              Standard right Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        className="dropdown-item menu-link dropdown-toggler"
                        href="#"
                      >
                        Masonry
                      </a>
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-masonry-three-columns.html"
                            >
                              3 columns
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-masonry-four-columns.html"
                            >
                              4 columns
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-masonry-left-sidebar.html"
                            >
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-masonry-right-sidebar.html"
                            >
                              right Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        className="dropdown-item menu-link dropdown-toggler"
                        href="#"
                      >
                        Single Post
                      </a>
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-single.html"
                            >
                              Default
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-single-left-sidebar.html"
                            >
                              left sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-single-slider.html"
                            >
                              slider post
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-single-video.html"
                            >
                              video post
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-single-audio.html"
                            >
                              audio post
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        className="dropdown-item menu-link dropdown-toggler"
                        href="#"
                      >
                        List
                      </a>
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-list-left-sidebar.html"
                            >
                              left sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="blog-list-right-sidebar.html"
                            >
                              right sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown dropdown-mega-menu">
                <a
                  className="dropdown-toggle nav-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  Shop
                </a>
                <div className="dropdown-menu">
                  <ul className="mega-menu d-lg-flex">
                    <li className="mega-menu-col col-lg-9">
                      <ul className="d-lg-flex">
                        <li className="mega-menu-col col-lg-4">
                          <ul>
                            <li className="dropdown-header">
                              Shop Page Layout
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-list.html"
                              >
                                shop List view
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-list-left-sidebar.html"
                              >
                                shop List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-list-right-sidebar.html"
                              >
                                shop List Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-left-sidebar.html"
                              >
                                Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-right-sidebar.html"
                              >
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-load-more.html"
                              >
                                Shop Load More
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-4">
                          <ul>
                            <li className="dropdown-header">Other Pages</li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-cart.html"
                              >
                                Cart
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="checkout.html"
                              >
                                Checkout
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="wishlist.html"
                              >
                                Wishlist
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="compare.html"
                              >
                                compare
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="order-completed.html"
                              >
                                Order Completed
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-4">
                          <ul>
                            <li className="dropdown-header">Product Pages</li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-product-detail.html"
                              >
                                Default
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-product-detail-left-sidebar.html"
                              >
                                Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-product-detail-right-sidebar.html"
                              >
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="shop-product-detail-thumbnails-left.html"
                              >
                                Thumbnails Left
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-col col-lg-3">
                      <div className="header_banner">
                        <div className="header_banner_content">
                          <div className="shop_banner">
                            <div className="banner_img overlay_bg_40">
                              <img
                                src={require("./assets/images/images-shop_banner.jpg")}
                                alt="shop_banner"
                              />
                            </div>
                            <div className="shop_bn_content">
                              <h5 className="text-uppercase shop_subtitle">
                                New Collection
                              </h5>
                              <h3 className="text-uppercase shop_title">
                                Sale 30% Off
                              </h3>
                              <a
                                href="#"
                                className="btn btn-white rounded-0 btn-sm text-uppercase"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="nav-link nav_item" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav attr-nav align-items-center">
            <li>
              <a href="javascript:void(0);" className="nav-link search_trigger">
                <i className="linearicons-magnifier" />
              </a>
              <div className="search_wrap">
                <span className="close-search">
                  <i className="ion-ios-close-empty" />
                </span>
                <form>
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    id="search_input"
                  />
                  <button type="submit" className="search_icon">
                    <i className="ion-ios-search-strong" />
                  </button>
                </form>
              </div>
              <div className="search_overlay" />
            </li>
            <li className="dropdown cart_dropdown">
              <Link
                className="nav-link cart_trigger"
                to="/shop-cart"
                data-toggle="dropdown"
              >
                <i className="linearicons-cart" />
                <span className="cart_count">2</span>
              </Link>
              <div className="cart_box dropdown-menu dropdown-menu-right">
                <ul className="cart_list">
                  <li>
                    <a href="#" className="item_remove">
                      <i className="ion-close" />
                    </a>
                    <a href="#">
                      <img
                        src={require("./assets/images/images-cart_thamb1.jpg")}
                        alt="cart_thumb1"
                      />
                      Variable product 001
                    </a>
                    <span className="cart_quantity">
                      {" "}
                      1 x{" "}
                      <span className="cart_amount">
                        {" "}
                        <span className="price_symbole">$</span>
                      </span>
                      78.00
                    </span>
                  </li>
                  <li>
                    <a href="#" className="item_remove">
                      <i className="ion-close" />
                    </a>
                    <a href="#">
                      <img
                        src={require("./assets/images/images-cart_thamb2.jpg")}
                        alt="cart_thumb2"
                      />
                      Ornare sed consequat
                    </a>
                    <span className="cart_quantity">
                      {" "}
                      1 x{" "}
                      <span className="cart_amount">
                        {" "}
                        <span className="price_symbole">$</span>
                      </span>
                      81.00
                    </span>
                  </li>
                </ul>
                <div className="cart_footer">
                  <p className="cart_total">
                    <strong>Subtotal:</strong>{" "}
                    <span className="cart_price">
                      {" "}
                      <span className="price_symbole">$</span>
                    </span>
                    159.00
                  </p>
                  <p className="cart_buttons">
                    <a href="#" className="btn btn-fill-line view-cart">
                      View Cart
                    </a>
                    <a href="#" className="btn btn-fill-out checkout">
                      Checkout
                    </a>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  {/* END HEADER */}
  {/* START SECTION BREADCRUMB
  <div className="breadcrumb_section bg_gray page-title-mini">
    <div className="container">
      {/* STRART CONTAINER *
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="page-title">
            <h1>Login</h1>
          </div>
        </div>
        <div className="col-md-6">
          <ol className="breadcrumb justify-content-md-end">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active">Login</li>
          </ol>
        </div>
      </div>
    </div>
    {/* END CONTAINER
  </div>
  {/* END SECTION BREADCRUMB */}
  {/* START MAIN CONTENT */}
  <div className="main_content">
    {/* START LOGIN SECTION */}
    <div className="section">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <div className="row align-items-center mb-4 pb-1">
          <div className="col-12">
            <div className="product_header">
              <div className="product_header_left">
                <div className="custom_select">
                  <select className="form-control form-control-sm">
                    <option value="order">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
              </div>
              <div className="product_header_right">
                <div className="products_view">
                  <a href="javascript:Void(0);" className="shorting_icon grid">
                    <i className="ti-view-grid" />
                  </a>
                  <a
                    href="javascript:Void(0);"
                    className="shorting_icon list active"
                  >
                    <i className="ti-layout-list-thumb" />
                  </a>
                </div>
                <div className="custom_select">
                  <select className="form-control form-control-sm">
                    <option value>Showing</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row shop_container list">
          <div className="col-md-4 col-6">
            <div className="product">
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img1.jpg')}
                    alt="product_img1"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">Blue Dress For Woman</a>
                </h6>
                <div className="product_price">
                  <span className="price">$45.00</span>
                  <del>$55.25</del>
                  <div className="on_sale">
                    <span>35% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "80%" }} />
                  </div>
                  <span className="rating_num">(21)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#87554B" />
                    <span data-color="#333333" />
                    <span data-color="#DA323F" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product">
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img2.jpg')}
                    alt="product_img2"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">Lether Gray Tuxedo</a>
                </h6>
                <div className="product_price">
                  <span className="price">$55.00</span>
                  <del>$95.00</del>
                  <div className="on_sale">
                    <span>25% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "68%" }} />
                  </div>
                  <span className="rating_num">(15)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#847764" />
                    <span data-color="#0393B5" />
                    <span data-color="#DA323F" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product">
              <span className="pr_flash">New</span>
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img3.jpg')}
                    alt="product_img3"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">woman full sliv dress</a>
                </h6>
                <div className="product_price">
                  <span className="price">$68.00</span>
                  <del>$99.00</del>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "87%" }} />
                  </div>
                  <span className="rating_num">(25)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#333333" />
                    <span data-color="#7C502F" />
                    <span data-color="#2F366C" />
                    <span data-color="#874A3D" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product">
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img4.jpg')}
                    alt="product_img4"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">light blue Shirt</a>
                </h6>
                <div className="product_price">
                  <span className="price">$69.00</span>
                  <del>$89.00</del>
                  <div className="on_sale">
                    <span>20% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "70%" }} />
                  </div>
                  <span className="rating_num">(22)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#333333" />
                    <span data-color="#A92534" />
                    <span data-color="#B9C2DF" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product">
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img5.jpg')}
                    alt="product_img5"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">blue dress for woman</a>
                </h6>
                <div className="product_price">
                  <span className="price">$45.00</span>
                  <del>$55.25</del>
                  <div className="on_sale">
                    <span>35% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "80%" }} />
                  </div>
                  <span className="rating_num">(21)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#87554B" />
                    <span data-color="#333333" />
                    <span data-color="#5FB7D4" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product">
              <span className="pr_flash bg-danger">Hot</span>
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img6.jpg')}
                    alt="product_img6"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">Blue casual check shirt</a>
                </h6>
                <div className="product_price">
                  <span className="price">$55.00</span>
                  <del>$95.00</del>
                  <div className="on_sale">
                    <span>25% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "68%" }} />
                  </div>
                  <span className="rating_num">(15)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#87554B" />
                    <span data-color="#333333" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product">
              <span className="pr_flash bg-success">Sale</span>
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img7.jpg')}
                    alt="product_img7"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">white black line dress</a>
                </h6>
                <div className="product_price">
                  <span className="price">$68.00</span>
                  <del>$99.00</del>
                  <div className="on_sale">
                    <span>20% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "87%" }} />
                  </div>
                  <span className="rating_num">(25)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#333333" />
                    <span data-color="#7C502F" />
                    <span data-color="#2F366C" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product">
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img8.jpg')}
                    alt="product_img8"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">Men blue jins Shirt</a>
                </h6>
                <div className="product_price">
                  <span className="price">$69.00</span>
                  <del>$89.00</del>
                  <div className="on_sale">
                    <span>20% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "70%" }} />
                  </div>
                  <span className="rating_num">(22)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#333333" />
                    <span data-color="#444653" />
                    <span data-color="#B9C2DF" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="product">
              <div className="product_img">
                <Link to="/shop-product-detail">
                  <img
                    src={require('./assets/images/images-product_img9.jpg')}
                    alt="product_img9"
                  />
                </Link>
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product_info">
                <h6 className="product_title">
                  <a href="shop-product-detail.html">T-Shirt Form Girls</a>
                </h6>
                <div className="product_price">
                  <span className="price">$45.00</span>
                  <del>$55.25</del>
                  <div className="on_sale">
                    <span>35% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "80%" }} />
                  </div>
                  <span className="rating_num">(21)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="pr_switch_wrap">
                  <div className="product_color_switch">
                    <span className="active" data-color="#B5B6BB" />
                    <span data-color="#333333" />
                    <span data-color="#DA323F" />
                  </div>
                </div>
                <div className="list_product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart">
                      <a href="#">
                        <i className="icon-basket-loaded" /> Add To Cart
                      </a>
                    </li>
                    <li>
                      <a href="shop-compare.html" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </a>
                    </li>
                    <li>
                      <a href="shop-quick-view.html" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="pagination mt-3 justify-content-center pagination_style1">
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="linearicons-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
        <div className="sidebar">
          <div className="widget">
            <h5 className="widget_title">Categories</h5>
            <ul className="widget_categories">
              <li>
                <a href="#">
                  <span className="categories_name">Women</span>
                  <span className="categories_num">(9)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="categories_name">Top</span>
                  <span className="categories_num">(6)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="categories_name">T-Shirts</span>
                  <span className="categories_num">(4)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="categories_name">Men</span>
                  <span className="categories_num">(7)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="categories_name">Shoes</span>
                  <span className="categories_num">(12)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h5 className="widget_title">Filter</h5>
            <div className="filter_price">
              <div
                id="price_filter"
                data-min={0}
                data-max={500}
                data-min-value={50}
                data-max-value={300}
                data-price-sign="$"
              />
              <div className="price_range">
                <span>
                  Price: <span id="flt_price" />
                </span>
                <input type="hidden" id="price_first" />
                <input type="hidden" id="price_second" />
              </div>
            </div>
          </div>
          <div className="widget">
            <h5 className="widget_title">Brand</h5>
            <ul className="list_brand">
              <li>
                <div className="custome-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    id="Arrivals"
                    defaultValue
                  />
                  <label className="form-check-label" htmlFor="Arrivals">
                    <span>New Arrivals</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custome-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    id="Lighting"
                    defaultValue
                  />
                  <label className="form-check-label" htmlFor="Lighting">
                    <span>Lighting</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custome-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    id="Tables"
                    defaultValue
                  />
                  <label className="form-check-label" htmlFor="Tables">
                    <span>Tables</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custome-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    id="Chairs"
                    defaultValue
                  />
                  <label className="form-check-label" htmlFor="Chairs">
                    <span>Chairs</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="custome-checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                    id="Accessories"
                    defaultValue
                  />
                  <label className="form-check-label" htmlFor="Accessories">
                    <span>Accessories</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="widget">
            <h5 className="widget_title">Size</h5>
            <div className="product_size_switch">
              <span>xs</span>
              <span>s</span>
              <span>m</span>
              <span>l</span>
              <span>xl</span>
              <span>2xl</span>
              <span>3xl</span>
            </div>
          </div>
          <div className="widget">
            <h5 className="widget_title">Color</h5>
            <div className="product_color_switch">
              <span data-color="#87554B" />
              <span data-color="#333333" />
              <span data-color="#DA323F" />
              <span data-color="#2F366C" />
              <span data-color="#B5B6BB" />
              <span data-color="#B9C2DF" />
              <span data-color="#5FB7D4" />
              <span data-color="#2F366C" />
            </div>
          </div>
          <div className="widget">
            <div className="shop_banner">
              <div className="banner_img overlay_bg_20">
                <img
                  src={require('./assets/images/images-sidebar_banner_img.jpg')}
                  alt="sidebar_banner_img"
                />
              </div>
              <div className="shop_bn_content2 text_white">
                <h5 className="text-uppercase shop_subtitle">New Collection</h5>
                <h3 className="text-uppercase shop_title">Sale 30% Off</h3>
                <a
                  href="#"
                  className="btn btn-white rounded-0 btn-sm text-uppercase"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* END LOGIN SECTION */}
    {/* START SECTION SUBSCRIBE NEWSLETTER */}
    <div className="section bg_default small_pt small_pb">
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
                <input
                  type="text"
                  required
                  className="form-control rounded-0"
                  placeholder="Enter Email Address"
                />
                <button
                  type="submit"
                  className="btn btn-dark rounded-0"
                  name="submit"
                  value="Submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* START SECTION SUBSCRIBE NEWSLETTER */}
  </div>
  {/* END MAIN CONTENT */}
  {/* START FOOTER */}
  <footer class="bg_gray"><div class="footer_top small_pt pb_20">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12">
                	<div class="widget">
                        <div class="footer_logo">
                            <a href="#"><img src={require("./assets/images/images-logo_dark.png")} alt="logo"/></a>
                        </div>
                        <p class="mb-3">If you are going to use of Lorem Ipsum need to be sure there isn't anything hidden of text</p>
                        <ul class="contact_info"><li>
                                <i class="ti-location-pin"></i>
                                <p>123 Street, Old Trafford, NewYork, USA</p>
                            </li>
                            <li>
                                <i class="ti-email"></i>
                                <a href="/cdn-cgi/l/email-protection#c1a8afa7ae81b2a8b5a4afa0aca4efa2aeac"><span class="__cf_email__" data-cfemail="0a63646c654a79637e6f646b676f24696567">[email&#160;protected]</span></a>
                            </li>
                            <li>
                                <i class="ti-mobile"></i>
                                <p>+ 457 789 789 65</p>
                            </li>
                        </ul></div>
        		</div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                	<div class="widget">
                        <h6 class="widget_title">Useful Links</h6>
                        <ul class="widget_links"><li><a href="#">About Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Location</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul></div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6">
                	<div class="widget">
                        <h6 class="widget_title">My Account</h6>
                        <ul class="widget_links"><li><a href="#">My Account</a></li>
                            <li><a href="#">Discount</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Orders History</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ul></div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                	<div class="widget">
                        <h6 class="widget_title">Instagram</h6>
                        <ul class="widget_instafeed instafeed_col4"><li><a href="#"><img src={require("./assets/images/images-insta_img1.jpg")} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img2.jpg")} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img3.jpg")} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img4.jpg")} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img5.jpg")} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img6.jpg")} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img7.jpg")} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={require("./assets/images/images-insta_img8.jpg")} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                        </ul></div>
                </div>
            </div>
        </div>
    </div>
    <div class="middle_footer">
    	<div class="container">
        	<div class="row">
            	<div class="col-12">
                	<div class="shopping_info">
                        <div class="row justify-content-center">
                            <div class="col-md-4">
                                <div class="icon_box icon_box_style2">
                                    <div class="icon">
                                        <i class="flaticon-shipped"></i>
                                    </div>
                                    <div class="icon_box_content">
                                    	<h5>Free Delivery</h5>
                                        <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="icon_box icon_box_style2">
                                    <div class="icon">
                                        <i class="flaticon-money-back"></i>
                                    </div>
                                    <div class="icon_box_content">
                                    	<h5>30 Day Returns Guarantee</h5>
                                        <p>Phasellus blandit massa enim elit of passage varius nunc.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="icon_box icon_box_style2">
                                    <div class="icon">
                                        <i class="flaticon-support"></i>
                                    </div>
                                    <div class="icon_box_content">
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
    <div class="bottom_footer border-top-tran">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <p class="mb-lg-0 text-center">&copy; 2020 All Rights Reserved by Bestwebcreator</p>
                </div>
                <div class="col-lg-4 order-lg-first">
                	<div class="widget mb-lg-0">
                        <ul class="social_icons text-center text-lg-left"><li><a href="#" class="sc_facebook"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#" class="sc_twitter"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="#" class="sc_google"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="#" class="sc_youtube"><i class="ion-social-youtube-outline"></i></a></li>
                            <li><a href="#" class="sc_instagram"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul></div>
                </div>
                <div class="col-lg-4">
                    <ul class="footer_payment text-center text-lg-right"><li><a href="#"><img src={require("./assets/images/images-visa.png")} alt="visa"/></a></li>
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
