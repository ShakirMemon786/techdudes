// It contains a login form. On clicking submit, it makes an axios post request with the username and password:

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../assets/images/images-logo_dark.png';
import logolight from '../assets/images/images-logo_light.png';
import visa from '../assets/images/images-visa.png';
import discover from '../assets/images/images-discover.png';
import mastercard from '../assets/images/images-master_card.png';
import paypal from '../assets/images/images-paypal.png';
import americanexpress from '../assets/images/images-amarican_express.png';
import insta1 from '../assets/images/images-insta_img1.jpg';
import insta2 from '../assets/images/images-insta_img2.jpg';
import insta3 from '../assets/images/images-insta_img3.jpg';
import insta4 from '../assets/images/images-insta_img4.jpg';
import insta5 from '../assets/images/images-insta_img5.jpg';
import insta6 from '../assets/images/images-insta_img6.jpg';
import insta7 from '../assets/images/images-insta_img7.jpg';
import insta8 from '../assets/images/images-insta_img8.jpg';
import menubanner1 from '../assets/images/images-menu_banner1.jpg';
import menubanner2 from '../assets/images/images-menu_banner2.jpg';
import menubanner3 from '../assets/images/images-menu_banner3.jpg';
import shopbanner1 from '../assets/images/images-shop_banner.jpg';
import cartthumb1 from '../assets/images/images-cart_thamb1.jpg';
import cartthumb2 from '../assets/images/images-cart_thamb2.jpg';


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        // console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
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
              src={logolight}
              alt="logo"
            />
            <img
              className="logo_dark"
              src={logo}
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
                          src={menubanner1}
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
                          src={menubanner2}
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
                          src={menubanner3}
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
                                src={shopbanner1}
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
              <a
                className="nav-link cart_trigger"
                href="#"
                data-toggle="dropdown"
              >
                <i className="linearicons-cart" />
                <span className="cart_count">2</span>
              </a>
              <div className="cart_box dropdown-menu dropdown-menu-right">
                <ul className="cart_list">
                  <li>
                    <a href="#" className="item_remove">
                      <i className="ion-close" />
                    </a>
                    <a href="#">
                      <img
                        src={cartthumb1}
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
                        src={cartthumb2}
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
                                 {/*       <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-6"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>*/}
                    <div className="login_register_wrap section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-10">
            <div className="login_wrap">
              <div className="padding_eight_all bg-white">
                <div className="heading_s1">
                  <h3>Login</h3>
                </div>
                <form method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      required
                       placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                    />
                  </div>
                  <div className="login_footer form-group">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox1"
                          defaultValue
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox1"
                        >
                          <span>Remember me</span>
                        </label>
                      </div>
                    </div>
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-fill-out btn-block"
                      name="login"
                      onClick={this.handleSubmit}
                    >
                      Log in
                    </button>
                  </div>
                </form>
                <div className="different_login">
                  <span> or</span>
                </div>
                <div className="form-note text-center">
                  Do not Have an Account? <Link to="/signup">Sign up now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                    <footer class="bg_gray"><div class="footer_top small_pt pb_20">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12">
                	<div class="widget">
                        <div class="footer_logo">
                            <a href="#"><img src={logo} alt="logo"/></a>
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
                        <ul class="widget_instafeed instafeed_col4"><li><a href="#"><img src={insta1} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={insta2} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={insta3} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={insta4} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={insta5} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={insta6} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={insta7} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                            <li><a href="#"><img src={insta8} alt="insta_img"/><span class="insta_icon"><i class="ti-instagram"></i></span></a></li>
                        </ul>
                        </div>
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
                    <ul class="footer_payment text-center text-lg-right"><li><a href="#"><img src={visa} alt="visa"/></a></li>
                        <li><a href="#"><img src={discover} alt="discover"/></a></li>
                        <li><a href="#"><img src={mastercard} alt="master_card"/></a></li>
                        <li><a href="#"><img src={paypal} alt="paypal"/></a></li>
                        <li><a href="#"><img src={americanexpress} alt="amarican_express"/></a></li>
                    </ul>
                    </div>
            </div>
        </div>
    </div>
</footer>
                </div>
            )
        }
    }
}

export default LoginForm
