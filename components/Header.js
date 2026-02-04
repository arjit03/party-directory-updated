export default function Header() {
    return (
        <header data-add-bg="bg-dark-1" className="header bg-green js-header" data-x="header" data-x-toggle="is-menu-opened">
            <div data-anim="fade" className="header__container px-30 sm:px-20">
                <div className="row justify-between items-center">

                    <div className="col-auto">
                        <div className="d-flex items-center">
                            <a href="/" className="header-logo mr-20" data-x="header-logo" data-x-toggle="is-logo-dark">
                                <img src="/img/general/logo-light.svg" alt="logo icon" />
                                <img src="/img/general/logo-dark.svg" alt="logo icon" />
                            </a>


                            <div className="header-menu " data-x="mobile-menu" data-x-toggle="is-menu-active">
                                <div className="mobile-overlay"></div>

                                <div className="header-menu__content">
                                    <div className="mobile-bg js-mobile-bg"></div>

                                    <div className="menu js-navList">
                                        <ul className="menu__nav text-white -is-active">


                                            <li className="menu-item-has-children">
                                                <a data-barba="true" href="#categories">
                                                    <span className="mr-10">Categories</span>
                                                    <i className="icon icon-chevron-sm-down"></i>
                                                </a>


                                                <ul className="subnav">
                                                    <li className="subnav__backBtn js-nav-list-back">
                                                        <a href="#" onClick={(e) => e.preventDefault()}><i className="icon icon-chevron-sm-down"></i> Categories</a>
                                                    </li>

                                                    <li><a href="/companies?category=Superhero">Superhero</a></li>
                                                    <li><a href="/companies?category=Princess">Princess</a></li>
                                                    <li><a href="/companies?category=Mascot">Mascot</a></li>
                                                    <li><a href="/companies?category=Party%20Rentals">Party Rentals</a></li>

                                                </ul>

                                            </li>

                                        </ul>
                                    </div>

                                    <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="col-auto">
                        <div className="d-flex items-center">

                            <div className="row x-gap-20 items-center xxl:d-none">
                                <div className="col-auto">
                                    <button className="d-flex items-center text-14 text-white" data-x-click="currency">
                                        <span className="js-currencyMenu-mainTitle">USD</span>
                                        <i className="icon-chevron-sm-down text-7 ml-10"></i>
                                    </button>
                                </div>

                                <div className="col-auto">
                                    <div className="w-1 h-20 bg-white-20"></div>
                                </div>

                                <div className="col-auto">
                                    <button className="d-flex items-center text-14 text-white" data-x-click="lang">
                                        <img src="/img/general/lang.png" alt="image" className="rounded-full mr-10" />
                                        <span className="js-language-mainTitle">United Kingdom</span>
                                        <i className="icon-chevron-sm-down text-7 ml-15"></i>
                                    </button>
                                </div>
                            </div>


                            <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                                <a href="/login" className="button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1">Become An Expert</a>
                                <a href="/signup" className="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20">Sign In / Register</a>
                            </div>

                            <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white" data-x="header-mobile-icons" data-x-toggle="text-white">
                                <div><a href="/login" className="d-flex items-center icon-user text-inherit text-22"></a></div>
                                <div><button className="d-flex items-center icon-menu text-inherit text-20" data-x-click="html, header, header-logo, header-mobile-icons, mobile-menu"></button></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
