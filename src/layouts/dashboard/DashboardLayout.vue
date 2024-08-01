<template>
    <div>
        <nav class="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
            id="sidenavAccordion">
            <!-- Sidenav Toggle Button-->
            <button class="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0"
                id="sidebarToggle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg></button>
            <!-- Navbar Brand-->
            <!-- * * Tip * * You can use text or an image for your navbar brand.-->
            <!-- * * * * * * When using an image, we recommend the SVG format.-->
            <!-- * * * * * * Dimensions: Maximum height: 32px, maximum width: 240px-->
            <a class="navbar-brand pe-3 ps-4 ps-lg-2" href="https://deballage.cm" target="_blank">Deballage</a>
            <!-- Navbar Search Input-->
            <!-- * * Note: * * Visible only on and above the lg breakpoint-->
            <!-- <form class="form-inline me-auto d-none d-lg-block me-3">
                <div class="input-group input-group-joined input-group-solid">
                    <input class="form-control pe-0" type="search" placeholder="Search" aria-label="Search">
                    <div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg></div>
                </div>
            </form> -->
            <!-- Navbar Items-->
            <ul class="navbar-nav align-items-center ms-auto">
                <!-- Documentation Dropdown-->
                <!-- <li class="nav-item dropdown no-caret d-none d-md-block me-3">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="fw-500">Se Deconecter</div>
                        <svg class="svg-inline--fa fa-chevron-right dropdown-arrow" aria-hidden="true" focusable="false"
                            data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512" data-fa-i2svg="">
                            <path fill="currentColor"
                                d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z">
                            </path>
                        </svg>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up"
                        aria-labelledby="navbarDropdownDocs">
                        <a class="dropdown-item py-3">
                            <div class="icon-stack bg-primary-soft text-primary me-4"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-book">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg></div>
                            <div>
                                <div class="small text-gray-500">Se Deconecter</div>
                                <a href="#" @click="">Deconnexion</a>
                            </div>
                        </a>
                        <div class="dropdown-divider m-0"></div>
                        <a class="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/components"
                            target="_blank">
                            <div class="icon-stack bg-primary-soft text-primary me-4"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-code">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg></div>
                            <div>
                                <div class="small text-gray-500">Components</div>
                                Code snippets and reference
                            </div>
                        </a>
                        <div class="dropdown-divider m-0"></div>
                        <a class="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/changelog"
                            target="_blank">
                            <div class="icon-stack bg-primary-soft text-primary me-4"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-file-text">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg></div>
                            <div>
                                <div class="small text-gray-500">Changelog</div>
                                Updates and changes
                            </div>
                        </a>
                    </div>
                </li> -->
                <!-- Navbar Search Dropdown-->
                <!-- * * Note: * * Visible only below the lg breakpoint-->
                <!-- <li class="nav-item dropdown no-caret me-3 d-lg-none">
                    <a class="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" href="#"
                        role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-search">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg></a>
                    <div class="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up"
                        aria-labelledby="searchDropdown">
                        <form class="form-inline me-auto w-100">
                            <div class="input-group input-group-joined input-group-solid">
                                <input class="form-control pe-0" type="text" placeholder="Search for..."
                                    aria-label="Search" aria-describedby="basic-addon2">
                                <div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-search">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg></div>
                            </div>
                        </form>
                    </div>
                </li> -->
                <!-- Alerts Dropdown -->
                <!-- <li class="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a class="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts"
                        href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg></a>
                    <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                        aria-labelledby="navbarDropdownAlerts">
                        <h6 class="dropdown-header dropdown-notifications-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-bell me-2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            Alerts Center
                        </h6>
                        <a class="dropdown-item dropdown-notifications-item" href="#!">
                            <div class="dropdown-notifications-item-icon bg-warning"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-activity">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                </svg></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details">December 29, 2021</div>
                                <div class="dropdown-notifications-item-content-text">This is an alert message. It's
                                    nothing
                                    serious, but it requires your attention.</div>
                            </div>
                        </a>
                        <a class="dropdown-item dropdown-notifications-item" href="#!">
                            <div class="dropdown-notifications-item-icon bg-info"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-bar-chart">
                                    <line x1="12" y1="20" x2="12" y2="10"></line>
                                    <line x1="18" y1="20" x2="18" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="16"></line>
                                </svg></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details">December 22, 2021</div>
                                <div class="dropdown-notifications-item-content-text">A new monthly report is ready.
                                    Click
                                    here to view!</div>
                            </div>
                        </a>
                        <a class="dropdown-item dropdown-notifications-item" href="#!">
                            <div class="dropdown-notifications-item-icon bg-danger"><svg
                                    class="svg-inline--fa fa-triangle-exclamation" aria-hidden="true" focusable="false"
                                    data-prefix="fas" data-icon="triangle-exclamation" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                        d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z">
                                    </path>
                                </svg>
                            </div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details">December 8, 2021</div>
                                <div class="dropdown-notifications-item-content-text">Critical system failure, systems
                                    shutting down.</div>
                            </div>
                        </a>
                        <a class="dropdown-item dropdown-notifications-item" href="#!">
                            <div class="dropdown-notifications-item-icon bg-success"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-user-plus">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details">December 2, 2021</div>
                                <div class="dropdown-notifications-item-content-text">New user request. Woody has
                                    requested
                                    access to the organization.</div>
                            </div>
                        </a>
                        <a class="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                    </div>
                </li> -->

                <!-- ============================================se deconnecter===================================================================================================== -->

                <!-- deconnexion Dropdown -->
                <li class="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a class="btn btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts"
                        href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">se deconnecter</a>
                    <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                        aria-labelledby="navbarDropdownAlerts">
                        <h6 class="dropdown-header dropdown-notifications-header">

                        </h6>
                        <a class="dropdown-item dropdown-notifications-item" href="#!">
                            <div class="dropdown-notifications-item-icon bg-warning"></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details">Deconnexion</div>
                                <div @click="confirmLogout" class="dropdown-notifications-item-content-text">Deconnexion
                                </div>
                            </div>
                        </a>

                    </div>
                </li>


                <!-- Messages Dropdown-->
                <!-- <li class="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications"> -->
                <!-- <a class="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages"
                        href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                            </path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg></a> -->
                <!-- <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                        aria-labelledby="navbarDropdownMessages"> -->
                <!-- <h6 class="dropdown-header dropdown-notifications-header">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-mail me-2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                </path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Message Center
                        </h6> -->
                <!-- Example Message 1  -->
                <!-- <a class="dropdown-item dropdown-notifications-item" href="#!">
                        <img class="dropdown-notifications-item-img"
                            src="assets/img/illustrations/profiles/profile-2.png">
                        <div class="dropdown-notifications-item-content">
                            <div class="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            <div class="dropdown-notifications-item-content-details">Thomas Wilcox · 58m</div>
                        </div>
                    </a> -->
                <!-- Example Message 2-->
                <!-- <a class="dropdown-item dropdown-notifications-item" href="#!">
                        <img class="dropdown-notifications-item-img"
                            src="assets/img/illustrations/profiles/profile-3.png">
                        <div class="dropdown-notifications-item-content">
                            <div class="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            <div class="dropdown-notifications-item-content-details">Emily Fowler · 2d</div>
                        </div>
                    </a> -->
                <!-- Example Message 3-->
                <!-- <a class="dropdown-item dropdown-notifications-item" href="#!">
                        <img class="dropdown-notifications-item-img"
                            src="assets/img/illustrations/profiles/profile-4.png">
                        <div class="dropdown-notifications-item-content">
                            <div class="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            <div class="dropdown-notifications-item-content-details">Marshall Rosencrantz · 3d</div>
                        </div>
                    </a> -->
                <!-- Example Message 4-->
                <!-- <a class="dropdown-item dropdown-notifications-item" href="#!">
                        <img class="dropdown-notifications-item-img"
                            src="assets/img/illustrations/profiles/profile-5.png">
                        <div class="dropdown-notifications-item-content">
                            <div class="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            <div class="dropdown-notifications-item-content-details">Colby Newton · 3d</div>
                        </div>
                    </a> -->
                <!-- Footer Link-->
                <!-- <a class="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a> -->
                <!-- </div>
                </li> -->
                <!-- User Dropdown-->
                <!-- <li class="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                <a class="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage"
                    href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"><img class="img-fluid"
                        src="assets/img/illustrations/profiles/profile-1.png"></a>
                <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
                    aria-labelledby="navbarDropdownUserImage">
                    <h6 class="dropdown-header d-flex align-items-center">
                        <img class="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png">
                        <div class="dropdown-user-details">
                            <div class="dropdown-user-details-name">Valerie Luna</div>
                            <div class="dropdown-user-details-email">vluna@aol.com</div>
                        </div>
                    </h6>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#!">
                        <div class="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path
                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                </path>
                            </svg></div>
                        Account
                    </a>
                    <a class="dropdown-item" href="#!">
                        <div class="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg></div>
                        Logout
                    </a>
                </div>
            </li> -->
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sidenav shadow-right sidenav-light">
                    <div class="sidenav-menu">
                        <div class="nav accordion" id="accordionSidenav">
                            <!-- Sidenav Menu Heading (Account)-->
                            <!-- * * Note: * * Visible only on and above the sm breakpoint-->
                            <!-- <div class="sidenav-menu-heading d-sm-none">Account</div> -->
                            <!-- Sidenav Link (Alerts)-->
                            <!-- * * Note: * * Visible only on and above the sm breakpoint-->
                            <!-- <a class="nav-link d-sm-none" href="#">
                                <div class="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-bell">
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg></div>
                                Alerts
                                <span class="badge bg-warning-soft text-warning ms-auto">4 New!</span>
                            </a> -->
                            <!-- Sidenav Link (Messages)-->
                            <!-- * * Note: * * Visible only on and above the sm breakpoint-->
                            <!-- <a class="nav-link d-sm-none" href="#!">
                                <div class="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-mail">
                                        <path
                                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                        </path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg></div>
                                Messages
                                <span class="badge bg-success-soft text-success ms-auto">2 New!</span>
                            </a> -->
                            <!-- Sidenav Menu Heading (Core)-->


                            <!-- products -->


                            <!-- Sidenav Heading (Custom)-->
                            <div class="sidenav-menu-heading">Produits</div>
                            <!-- Sidenav Accordion (Pages)-->
                            <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-grid">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg></div>
                                Gerer les produits
                                <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                        data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                        </path>
                                    </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com --></div>
                            </a>
                            <div class="collapse" id="collapsePages" data-bs-parent="#accordionSidenav">
                                <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                    <!-- ATTRIBUTES-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#pagesCollapseAccount" aria-expanded="false"
                                        aria-controls="pagesCollapseAccount">
                                        Attributes
                                        <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                                aria-hidden="true" focusable="false" data-prefix="fas"
                                                data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512" data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                                </path>
                                            </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com -->
                                        </div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAccount"
                                        data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav class="sidenav-menu-nested nav">
                                            <RouterLink class="nav-link" to="/dashboard/attributes">Les Attributes
                                            </RouterLink>
                                            <RouterLink class="nav-link" to="/dashboard/attributes/create">Ajouter un
                                                attribute
                                            </RouterLink>

                                        </nav>
                                    </div>


                                    <!-- PROPERTIES-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#pagesCollapsePRO" aria-expanded="false"
                                        aria-controls="pagesCollapseAccount">
                                        Properties
                                        <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                                aria-hidden="true" focusable="false" data-prefix="fas"
                                                data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512" data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                                </path>
                                            </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com -->
                                        </div>
                                    </a>
                                    <div class="collapse" id="pagesCollapsePRO"
                                        data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav class="sidenav-menu-nested nav">
                                            <RouterLink class="nav-link" to="/dashboard/properties">Les proprietes
                                            </RouterLink>
                                            <RouterLink class="nav-link" to="/dashboard/properties/create">Ajoute une
                                                proprietes
                                            </RouterLink>

                                        </nav>
                                    </div>



                                    <!-- CATEGORIES-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                                        aria-controls="pagesCollapseAuth">
                                        Categories
                                        <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                                aria-hidden="true" focusable="false" data-prefix="fas"
                                                data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512" data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                                </path>
                                            </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com -->
                                        </div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth"
                                        data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                                            <RouterLink class="nav-link" to="/dashboard/categories">Les Categories
                                            </RouterLink>
                                            <RouterLink class="nav-link" to="/dashboard/categories/create">Ajouter une
                                                Categorie
                                            </RouterLink>
                                        </nav>
                                    </div>

                                    <!-- Products-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#pagesCollapseproduct" aria-expanded="false"
                                        aria-controls="pagesCollapseAuth">
                                        Produits
                                        <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                                aria-hidden="true" focusable="false" data-prefix="fas"
                                                data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512" data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                                </path>
                                            </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com -->
                                        </div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseproduct"
                                        data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                                            <RouterLink class="nav-link" to="/dashboard/products">Les Produits
                                            </RouterLink>
                                            <RouterLink class="nav-link" to="/dashboard/products/create">Ajouter un
                                                produit
                                            </RouterLink>
                                        </nav>
                                    </div>






                                    <!-- Nested Sidenav Accordion (Pages -> Error)-->
                                </nav>
                            </div>



                            <!-- end products -->

                            <!-- Location -->


                            <!-- Sidenav Heading (Custom)-->
                            <div class="sidenav-menu-heading">Localisation</div>
                            <!-- Sidenav Accordion (Pages)-->
                            <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                data-bs-target="#collapsePagesloc" aria-expanded="false" aria-controls="collapsePages">
                                <div class="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-grid">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg></div>
                                Localisation
                                <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                        data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                        </path>
                                    </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com --></div>
                            </a>
                            <div class="collapse" id="collapsePagesloc" data-bs-parent="#accordionSidenav">
                                <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                    <!-- Nested Sidenav Accordion (Pages -> Account)-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#pagesCollapseAccount" aria-expanded="false"
                                        aria-controls="pagesCollapseAccount">
                                        Villes
                                        <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                                aria-hidden="true" focusable="false" data-prefix="fas"
                                                data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512" data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                                </path>
                                            </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com -->
                                        </div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAccount"
                                        data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav class="sidenav-menu-nested nav">
                                            <RouterLink class="nav-link" to="/dashboard/cities">Les villes
                                            </RouterLink>
                                            <RouterLink class="nav-link" to="/dashboard/cities/create">Ajouter une ville
                                            </RouterLink>

                                        </nav>
                                    </div>
                                    <!-- Nested Sidenav Accordion (Pages -> Authentication)-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                                        aria-controls="pagesCollapseAuth">
                                        Quartier
                                        <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                                aria-hidden="true" focusable="false" data-prefix="fas"
                                                data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512" data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                                </path>
                                            </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com -->
                                        </div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth"
                                        data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                                            <RouterLink class="nav-link" to="/dashboard/neighborhoods">Les Quartiers
                                            </RouterLink>
                                            <RouterLink class="nav-link" to="/dashboard/neighborhoods/create">Ajouter
                                                un quartier
                                            </RouterLink>
                                        </nav>
                                    </div>
                                    <!-- Nested Sidenav Accordion (Pages -> Error)-->
                                </nav>
                            </div>


                            <!-- end location -->


                            <!-- Shops -->

                            <!-- Sidenav Heading (Custom)-->
                            <div class="sidenav-menu-heading">Boutiques</div>
                            <!-- Sidenav Accordion (Pages)-->
                            <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                data-bs-target="#collapsePagesshop" aria-expanded="false" aria-controls="collapsePages">
                                <div class="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-grid">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg></div>
                                Gerer les Boutiques
                                <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                        data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                        </path>
                                    </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com --></div>
                            </a>
                            <div class="collapse" id="collapsePagesshop" data-bs-parent="#accordionSidenav">
                                <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                    <!-- Nested Sidenav Accordion (Pages -> Account)-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#pagesCollapsesh" aria-expanded="false"
                                        aria-controls="pagesCollapseAccount">
                                        Boutiques
                                        <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                                aria-hidden="true" focusable="false" data-prefix="fas"
                                                data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512" data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                                </path>
                                            </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com -->
                                        </div>
                                    </a>
                                    <div class="collapse" id="pagesCollapsesh"
                                        data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav class="sidenav-menu-nested nav">
                                            <RouterLink class="nav-link" to="/dashboard/shops">Les Boutiques
                                            </RouterLink>
                                            <RouterLink class="nav-link" to="/dashboard/shops/create">Ajouter une
                                                Boutique
                                            </RouterLink>

                                        </nav>
                                    </div>
                                    <!-- ----------------------------------------------------------------------------- -->
                                </nav>
                            </div>


                            <!-- end shops -->






                            <!-- Shops -->

                            <!-- Sidenav Heading (Custom)-->
                            <div class="sidenav-menu-heading">Utilisateurs</div>
                            <!-- Sidenav Accordion (Pages)-->
                            <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                data-bs-target="#collapsePagesuser" aria-expanded="false" aria-controls="collapsePages">
                                <div class="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-grid">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg></div>
                                Gerer les utilisateurs
                                <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                        data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                        </path>
                                    </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com --></div>
                            </a>
                            <div class="collapse" id="collapsePagesuser" data-bs-parent="#accordionSidenav">
                                <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                    <!-- Nested Sidenav Accordion (Pages -> Account)-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse"
                                        data-bs-target="#pagesCollapseuser" aria-expanded="false"
                                        aria-controls="pagesCollapseAccount">
                                        Utilisateurs
                                        <div class="sidenav-collapse-arrow"><svg class="svg-inline--fa fa-angle-down"
                                                aria-hidden="true" focusable="false" data-prefix="fas"
                                                data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512" data-fa-i2svg="">
                                                <path fill="currentColor"
                                                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z">
                                                </path>
                                            </svg><!-- <i class="fas fa-angle-down"></i> Font Awesome fontawesome.com -->
                                        </div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseuser"
                                        data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav class="sidenav-menu-nested nav">
                                            <RouterLink class="nav-link" to="/dashboard/users">Les Utilisateurs
                                            </RouterLink>
                                            <RouterLink class="nav-link" to="/dashboard/users/create">Ajouter un
                                                utilisateur
                                            </RouterLink>

                                        </nav>
                                    </div>
                                    <!-- ----------------------------------------------------------------------------- -->
                                </nav>
                            </div>


                            <!-- end shops -->




                        </div>
                    </div>
                    <!-- Sidenav Footer-->
                    <div class="sidenav-footer">
                        <div class="sidenav-footer-content">
                            <div class="sidenav-footer-subtitle">Logged in as:</div>
                            <div class="sidenav-footer-title">Valerie Luna</div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <router-view></router-view>
                <footer class="footer-admin mt-auto footer-light">
                    <div class="container-xl px-4">
                        <div class="row">
                            <div class="col-md-6 small">Copyright © deballage.cm 2024</div>
                            <div class="col-md-6 text-md-end small">
                                <a href="#!">Privacy Policy</a>
                                ·
                                <a href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>



        <iframe height="1" width="1"
            style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe>



        <div class="litepicker" style="display: none;" data-plugins="ranges" data-ranges-position="left">
            <div class="container__main">
                <div class="container__predefined-ranges"><button tabindex="-1" data-start="1671801764169"
                        data-end="1671801764169">Today</button><button tabindex="-1" data-start="1671715364169"
                        data-end="1671715364169">Yesterday</button><button tabindex="-1" data-start="1671283364169"
                        data-end="1671801764169">Last 7 Days</button><button tabindex="-1" data-start="1669296164169"
                        data-end="1671801764169">Last 30 Days</button><button tabindex="-1" data-start="1669900964169"
                        data-end="1672441200000">This Month</button><button tabindex="-1" data-start="1667308964169"
                        data-end="1669762800000">Last Month</button></div>
                <div class="container__months columns-2">
                    <div class="month-item">
                        <div class="month-item-header"><button type="button" class="button-previous-month"><svg
                                    width="11" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z"
                                        fill-rule="nonzero">
                                    </path>
                                </svg></button>
                            <div><strong class="month-item-name">December</strong><span
                                    class="month-item-year">2022</span>
                            </div><button type="button" class="button-next-month"><svg width="11" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero">
                                    </path>
                                </svg></button>
                        </div>
                        <div class="month-item-weekdays-row">
                            <div title="Monday">Mon</div>
                            <div title="Tuesday">Tue</div>
                            <div title="Wednesday">Wed</div>
                            <div title="Thursday">Thu</div>
                            <div title="Friday">Fri</div>
                            <div title="Saturday">Sat</div>
                            <div title="Sunday">Sun</div>
                        </div>
                        <div class="container__days">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div class="day-item" data-time="1669849200000" tabindex="0">1</div>
                            <div class="day-item" data-time="1669935600000" tabindex="0">2</div>
                            <div class="day-item" data-time="1670022000000" tabindex="0">3</div>
                            <div class="day-item" data-time="1670108400000" tabindex="0">4</div>
                            <div class="day-item" data-time="1670194800000" tabindex="0">5</div>
                            <div class="day-item" data-time="1670281200000" tabindex="0">6</div>
                            <div class="day-item" data-time="1670367600000" tabindex="0">7</div>
                            <div class="day-item" data-time="1670454000000" tabindex="0">8</div>
                            <div class="day-item" data-time="1670540400000" tabindex="0">9</div>
                            <div class="day-item" data-time="1670626800000" tabindex="0">10</div>
                            <div class="day-item" data-time="1670713200000" tabindex="0">11</div>
                            <div class="day-item" data-time="1670799600000" tabindex="0">12</div>
                            <div class="day-item" data-time="1670886000000" tabindex="0">13</div>
                            <div class="day-item" data-time="1670972400000" tabindex="0">14</div>
                            <div class="day-item" data-time="1671058800000" tabindex="0">15</div>
                            <div class="day-item" data-time="1671145200000" tabindex="0">16</div>
                            <div class="day-item" data-time="1671231600000" tabindex="0">17</div>
                            <div class="day-item" data-time="1671318000000" tabindex="0">18</div>
                            <div class="day-item" data-time="1671404400000" tabindex="0">19</div>
                            <div class="day-item" data-time="1671490800000" tabindex="0">20</div>
                            <div class="day-item" data-time="1671577200000" tabindex="0">21</div>
                            <div class="day-item" data-time="1671663600000" tabindex="0">22</div>
                            <div class="day-item is-today is-start-date is-end-date" data-time="1671750000000"
                                tabindex="0">
                                23</div>
                            <div class="day-item" data-time="1671836400000" tabindex="0">24</div>
                            <div class="day-item" data-time="1671922800000" tabindex="0">25</div>
                            <div class="day-item" data-time="1672009200000" tabindex="0">26</div>
                            <div class="day-item" data-time="1672095600000" tabindex="0">27</div>
                            <div class="day-item" data-time="1672182000000" tabindex="0">28</div>
                            <div class="day-item" data-time="1672268400000" tabindex="0">29</div>
                            <div class="day-item" data-time="1672354800000" tabindex="0">30</div>
                            <div class="day-item" data-time="1672441200000" tabindex="0">31</div>
                        </div>
                    </div>
                    <div class="month-item">
                        <div class="month-item-header"><button type="button" class="button-previous-month"><svg
                                    width="11" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z"
                                        fill-rule="nonzero">
                                    </path>
                                </svg></button>
                            <div><strong class="month-item-name">January</strong><span
                                    class="month-item-year">2023</span>
                            </div><button type="button" class="button-next-month"><svg width="11" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero">
                                    </path>
                                </svg></button>
                        </div>
                        <div class="month-item-weekdays-row">
                            <div title="Monday">Mon</div>
                            <div title="Tuesday">Tue</div>
                            <div title="Wednesday">Wed</div>
                            <div title="Thursday">Thu</div>
                            <div title="Friday">Fri</div>
                            <div title="Saturday">Sat</div>
                            <div title="Sunday">Sun</div>
                        </div>
                        <div class="container__days">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div class="day-item" data-time="1672527600000" tabindex="0">1</div>
                            <div class="day-item" data-time="1672614000000" tabindex="0">2</div>
                            <div class="day-item" data-time="1672700400000" tabindex="0">3</div>
                            <div class="day-item" data-time="1672786800000" tabindex="0">4</div>
                            <div class="day-item" data-time="1672873200000" tabindex="0">5</div>
                            <div class="day-item" data-time="1672959600000" tabindex="0">6</div>
                            <div class="day-item" data-time="1673046000000" tabindex="0">7</div>
                            <div class="day-item" data-time="1673132400000" tabindex="0">8</div>
                            <div class="day-item" data-time="1673218800000" tabindex="0">9</div>
                            <div class="day-item" data-time="1673305200000" tabindex="0">10</div>
                            <div class="day-item" data-time="1673391600000" tabindex="0">11</div>
                            <div class="day-item" data-time="1673478000000" tabindex="0">12</div>
                            <div class="day-item" data-time="1673564400000" tabindex="0">13</div>
                            <div class="day-item" data-time="1673650800000" tabindex="0">14</div>
                            <div class="day-item" data-time="1673737200000" tabindex="0">15</div>
                            <div class="day-item" data-time="1673823600000" tabindex="0">16</div>
                            <div class="day-item" data-time="1673910000000" tabindex="0">17</div>
                            <div class="day-item" data-time="1673996400000" tabindex="0">18</div>
                            <div class="day-item" data-time="1674082800000" tabindex="0">19</div>
                            <div class="day-item" data-time="1674169200000" tabindex="0">20</div>
                            <div class="day-item" data-time="1674255600000" tabindex="0">21</div>
                            <div class="day-item" data-time="1674342000000" tabindex="0">22</div>
                            <div class="day-item" data-time="1674428400000" tabindex="0">23</div>
                            <div class="day-item" data-time="1674514800000" tabindex="0">24</div>
                            <div class="day-item" data-time="1674601200000" tabindex="0">25</div>
                            <div class="day-item" data-time="1674687600000" tabindex="0">26</div>
                            <div class="day-item" data-time="1674774000000" tabindex="0">27</div>
                            <div class="day-item" data-time="1674860400000" tabindex="0">28</div>
                            <div class="day-item" data-time="1674946800000" tabindex="0">29</div>
                            <div class="day-item" data-time="1675033200000" tabindex="0">30</div>
                            <div class="day-item" data-time="1675119600000" tabindex="0">31</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container__tooltip"></div>
        </div>
    </div>

</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import { admin } from '@/assets/js/sbadmin';
export default {
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const path = store.getters['getImagePaths/getPath'];
        const token = computed(() => store.getters['auth/isAuthenticated']);
        const authUser = computed(() => store.getters['auth/user']);

        onMounted(async () => {
            router.push('/dashboard');
            if (token.value) {
                await store.dispatch('auth/fetchUser');
            }

            admin();

        });


        const confirmLogout = async () => {
            const confirmed = await Swal.fire({
                title: 'Êtes-vous sûr de vouloir vous déconnecter ?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Oui, déconnectez-moi',
                cancelButtonText: 'Annuler'
            });

            if (confirmed.isConfirmed) {
                console.log('le logout ');
                await store.dispatch('auth/logout');

                const confirm = await Swal.fire('Déconnexion réussie', '', 'success');
                if (confirm) {
                    router.push('/auth/login');
                }
            }
        };


        return {
            path,
            token,
            authUser,
            confirmLogout,
        };

    }
}




</script>



<style></style>
