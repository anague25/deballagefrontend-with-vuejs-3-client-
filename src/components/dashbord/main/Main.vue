<template>
     <main>
                <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                    <div class="container-xl px-4">
                        <div class="page-header-content pt-4">
                            <div class="row align-items-center justify-content-between">
                                <div class="col-auto mt-4">
                                    <h1 class="page-header-title">
                                        <div class="page-header-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-activity">
                                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                            </svg></div>
                                        Dashboard
                                    </h1>
                                    <div class="page-header-subtitle">main
                                    </div>
                                </div>
                                <div class="col-12 col-xl-auto mt-4">
                                    <div class="input-group input-group-joined border-0" style="width: 16.5rem">
                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="feather feather-calendar text-primary">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg></span>
                                        <input class="form-control ps-0 pointer" id="litepickerRangePlugin"
                                            placeholder="Select date range...">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <!-- Main page content-->
                <div class="container-xl px-4 mt-n10">
                    <div class="row">
                        <div class="col-xxl-4 col-xl-12 mb-4">
                            <div class="card h-100">
                                <div class="card-body h-100 p-5">
                                    <div class="row align-items-center">
                                        <div class="col-xl-8 col-xxl-12">
                                            <div
                                                class="text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4">
                                                <h1 class="text-primary">Welcome to SB Admin Pro!</h1>
                                                <p class="text-gray-700 mb-0">Browse our fully designed UI toolkit!
                                                    Browse our prebuilt app pages, components, and utilites, and be sure
                                                    to look at our full documentation!</p>
                                            </div>
                                        </div>
                                        <!-- <div class="col-xl-4 col-xxl-12 text-center"><img class="img-fluid"
                                                src="assets/img/illustrations/at-work.svg" style="max-width: 26rem">
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-6 mb-4">
                            <div class="card card-header-actions h-100">
                                <div class="card-header">
                                    Recent Activity
                                    <div class="dropdown no-caret">
                                        <button class="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="dropdownMenuButton" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-more-vertical text-gray-500">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button>
                                        <div class="dropdown-menu dropdown-menu-end animated--fade-in-up"
                                            aria-labelledby="dropdownMenuButton">
                                            <h6 class="dropdown-header">Filter Activity:</h6>
                                            <a class="dropdown-item" href="#!"><span
                                                    class="badge bg-green-soft text-green my-1">Commerce</span></a>
                                            <a class="dropdown-item" href="#!"><span
                                                    class="badge bg-blue-soft text-blue my-1">Reporting</span></a>
                                            <a class="dropdown-item" href="#!"><span
                                                    class="badge bg-yellow-soft text-yellow my-1">Server</span></a>
                                            <a class="dropdown-item" href="#!"><span
                                                    class="badge bg-purple-soft text-purple my-1">Users</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="timeline timeline-xs">
                                        <!-- Timeline Item 1-->
                                        <div class="timeline-item">
                                            <div class="timeline-item-marker">
                                                <div class="timeline-item-marker-text">27 min</div>
                                                <div class="timeline-item-marker-indicator bg-green"></div>
                                            </div>
                                            <div class="timeline-item-content">
                                                New order placed!
                                                <a class="fw-bold text-dark" href="#!">Order #2912</a>
                                                has been successfully placed.
                                            </div>
                                        </div>
                                        <!-- Timeline Item 2-->
                                        <div class="timeline-item">
                                            <div class="timeline-item-marker">
                                                <div class="timeline-item-marker-text">58 min</div>
                                                <div class="timeline-item-marker-indicator bg-blue"></div>
                                            </div>
                                            <div class="timeline-item-content">
                                                Your
                                                <a class="fw-bold text-dark" href="#!">weekly report</a>
                                                has been generated and is ready to view.
                                            </div>
                                        </div>
                                        <!-- Timeline Item 3-->
                                        <div class="timeline-item">
                                            <div class="timeline-item-marker">
                                                <div class="timeline-item-marker-text">2 hrs</div>
                                                <div class="timeline-item-marker-indicator bg-purple"></div>
                                            </div>
                                            <div class="timeline-item-content">
                                                New user
                                                <a class="fw-bold text-dark" href="#!">Valerie Luna</a>
                                                has registered
                                            </div>
                                        </div>
                                        <!-- Timeline Item 4-->
                                        <div class="timeline-item">
                                            <div class="timeline-item-marker">
                                                <div class="timeline-item-marker-text">1 day</div>
                                                <div class="timeline-item-marker-indicator bg-yellow"></div>
                                            </div>
                                            <div class="timeline-item-content">Server activity monitor alert</div>
                                        </div>
                                        <!-- Timeline Item 5-->
                                        <div class="timeline-item">
                                            <div class="timeline-item-marker">
                                                <div class="timeline-item-marker-text">1 day</div>
                                                <div class="timeline-item-marker-indicator bg-green"></div>
                                            </div>
                                            <div class="timeline-item-content">
                                                New order placed!
                                                <a class="fw-bold text-dark" href="#!">Order #2911</a>
                                                has been successfully placed.
                                            </div>
                                        </div>
                                        <!-- Timeline Item 6-->
                                        <div class="timeline-item">
                                            <div class="timeline-item-marker">
                                                <div class="timeline-item-marker-text">1 day</div>
                                                <div class="timeline-item-marker-indicator bg-purple"></div>
                                            </div>
                                            <div class="timeline-item-content">
                                                Details for
                                                <a class="fw-bold text-dark" href="#!">Marketing and Planning
                                                    Meeting</a>
                                                have been updated.
                                            </div>
                                        </div>
                                        <!-- Timeline Item 7-->
                                        <div class="timeline-item">
                                            <div class="timeline-item-marker">
                                                <div class="timeline-item-marker-text">2 days</div>
                                                <div class="timeline-item-marker-indicator bg-green"></div>
                                            </div>
                                            <div class="timeline-item-content">
                                                New order placed!
                                                <a class="fw-bold text-dark" href="#!">Order #2910</a>
                                                has been successfully placed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-6 mb-4">
                            <div class="card card-header-actions h-100">
                                <div class="card-header">
                                    Progress Tracker
                                    <div class="dropdown no-caret">
                                        <button class="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="dropdownMenuButton" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-more-vertical text-gray-500">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button>
                                        <div class="dropdown-menu dropdown-menu-end animated--fade-in-up"
                                            aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#!">
                                                <div class="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-list text-gray-500">
                                                        <line x1="8" y1="6" x2="21" y2="6"></line>
                                                        <line x1="8" y1="12" x2="21" y2="12"></line>
                                                        <line x1="8" y1="18" x2="21" y2="18"></line>
                                                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                                    </svg></div>
                                                Manage Tasks
                                            </a>
                                            <a class="dropdown-item" href="#!">
                                                <div class="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-plus-circle text-gray-500">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg></div>
                                                Add New Task
                                            </a>
                                            <a class="dropdown-item" href="#!">
                                                <div class="dropdown-item-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="feather feather-minus-circle text-gray-500">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg></div>
                                                Delete Tasks
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h4 class="small">
                                        Server Migration
                                        <span class="float-end fw-bold">20%</span>
                                    </h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 20%"
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small">
                                        Sales Tracking
                                        <span class="float-end fw-bold">40%</span>
                                    </h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 40%"
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small">
                                        Customer Database
                                        <span class="float-end fw-bold">60%</span>
                                    </h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar" role="progressbar" style="width: 60%"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small">
                                        Payout Details
                                        <span class="float-end fw-bold">80%</span>
                                    </h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 80%"
                                            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small">
                                        Account Setup
                                        <span class="float-end fw-bold">Complete!</span>
                                    </h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%"
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div class="card-footer position-relative">
                                    <div class="d-flex align-items-center justify-content-between small text-body">
                                        <a class="stretched-link text-body" href="#!">Visit Task Center</a>
                                        <svg class="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false"
                                            data-prefix="fas" data-icon="angle-right" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                                            </path>
                                        </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Example Colored Cards for Dashboard Demo-->
                    <div class="row">
                        <div class="col-lg-6 col-xl-3 mb-4">
                            <div class="card bg-primary text-white h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="me-3">
                                            <div class="text-white-75 small">Earnings (Monthly)</div>
                                            <div class="text-lg fw-bold">$40,000</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-calendar feather-xl text-white-50">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div class="card-footer d-flex align-items-center justify-content-between small">
                                    <a class="text-white stretched-link" href="#!">View Report</a>
                                    <div class="text-white"><svg class="svg-inline--fa fa-angle-right"
                                            aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                                            </path>
                                        </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-3 mb-4">
                            <div class="card bg-warning text-white h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="me-3">
                                            <div class="text-white-75 small">Earnings (Annual)</div>
                                            <div class="text-lg fw-bold">$215,000</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-dollar-sign feather-xl text-white-50">
                                            <line x1="12" y1="1" x2="12" y2="23"></line>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="card-footer d-flex align-items-center justify-content-between small">
                                    <a class="text-white stretched-link" href="#!">View Report</a>
                                    <div class="text-white"><svg class="svg-inline--fa fa-angle-right"
                                            aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                                            </path>
                                        </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-3 mb-4">
                            <div class="card bg-success text-white h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="me-3">
                                            <div class="text-white-75 small">Task Completion</div>
                                            <div class="text-lg fw-bold">24</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-check-square feather-xl text-white-50">
                                            <polyline points="9 11 12 14 22 4"></polyline>
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="card-footer d-flex align-items-center justify-content-between small">
                                    <a class="text-white stretched-link" href="#!">View Tasks</a>
                                    <div class="text-white"><svg class="svg-inline--fa fa-angle-right"
                                            aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                                            </path>
                                        </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-3 mb-4">
                            <div class="card bg-danger text-white h-100">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="me-3">
                                            <div class="text-white-75 small">Pending Requests</div>
                                            <div class="text-lg fw-bold">17</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-message-circle feather-xl text-white-50">
                                            <path
                                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="card-footer d-flex align-items-center justify-content-between small">
                                    <a class="text-white stretched-link" href="#!">View Requests</a>
                                    <div class="text-white"><svg class="svg-inline--fa fa-angle-right"
                                            aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 512" data-fa-i2svg="">
                                            <path fill="currentColor"
                                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                                            </path>
                                        </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Example Charts for Dashboard Demo-->
                    <div class="row">
                        <div class="col-xl-6 mb-4">
                            <div class="card card-header-actions h-100">
                                <div class="card-header">
                                    Earnings Breakdown
                                    <div class="dropdown no-caret">
                                        <button class="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="areaChartDropdownExample" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-more-vertical text-gray-500">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button>
                                        <div class="dropdown-menu dropdown-menu-end animated--fade-in-up"
                                            aria-labelledby="areaChartDropdownExample">
                                            <a class="dropdown-item" href="#!">Last 12 Months</a>
                                            <a class="dropdown-item" href="#!">Last 30 Days</a>
                                            <a class="dropdown-item" href="#!">Last 7 Days</a>
                                            <a class="dropdown-item" href="#!">This Month</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#!">Custom Range</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="chart-area">
                                        <div class="chartjs-size-monitor">
                                            <div class="chartjs-size-monitor-expand">
                                                <div class=""></div>
                                            </div>
                                            <div class="chartjs-size-monitor-shrink">
                                                <div class=""></div>
                                            </div>
                                        </div><canvas id="myAreaChart" width="564" height="320"
                                            style="display: block; height: 160px; width: 282px;"
                                            class="chartjs-render-monitor"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 mb-4">
                            <div class="card card-header-actions h-100">
                                <div class="card-header">
                                    Monthly Revenue
                                    <div class="dropdown no-caret">
                                        <button class="btn btn-transparent-dark btn-icon dropdown-toggle"
                                            id="areaChartDropdownExample" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-more-vertical text-gray-500">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button>
                                        <div class="dropdown-menu dropdown-menu-end animated--fade-in-up"
                                            aria-labelledby="areaChartDropdownExample">
                                            <a class="dropdown-item" href="#!">Last 12 Months</a>
                                            <a class="dropdown-item" href="#!">Last 30 Days</a>
                                            <a class="dropdown-item" href="#!">Last 7 Days</a>
                                            <a class="dropdown-item" href="#!">This Month</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#!">Custom Range</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="chart-bar">
                                        <div class="chartjs-size-monitor">
                                            <div class="chartjs-size-monitor-expand">
                                                <div class=""></div>
                                            </div>
                                            <div class="chartjs-size-monitor-shrink">
                                                <div class=""></div>
                                            </div>
                                        </div><canvas id="myBarChart" width="564" height="320"
                                            style="display: block; height: 160px; width: 282px;"
                                            class="chartjs-render-monitor"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Example DataTable for Dashboard Demo-->
                    <div class="card mb-4">
                        <div class="card-header">Personnel Management</div>
                        <div class="card-body">
                            <div
                                class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                                <div class="dataTable-top">
                                    <div class="dataTable-dropdown"><label><select class="dataTable-selector">
                                                <option value="5">5</option>
                                                <option value="10" selected="">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                                <option value="25">25</option>
                                            </select> entries per page</label></div>
                                    <div class="dataTable-search"><input class="dataTable-input" placeholder="Search..."
                                            type="text"></div>
                                </div>
                                <div class="dataTable-container">
                                    <table id="datatablesSimple" class="dataTable-table">
                                        <thead>
                                            <tr>
                                                <th data-sortable="" style="width: 13.1615%;"><a href="#"
                                                        class="dataTable-sorter">Name</a></th>
                                                <th data-sortable="" style="width: 13.9756%;"><a href="#"
                                                        class="dataTable-sorter">Position</a></th>
                                                <th data-sortable="" style="width: 12.7544%;"><a href="#"
                                                        class="dataTable-sorter">Office</a></th>
                                                <th data-sortable="" style="width: 9.36228%;"><a href="#"
                                                        class="dataTable-sorter">Age</a></th>
                                                <th data-sortable="" style="width: 14.2469%;"><a href="#"
                                                        class="dataTable-sorter">Start date</a></th>
                                                <th data-sortable="" style="width: 12.3474%;"><a href="#"
                                                        class="dataTable-sorter">Salary</a></th>
                                                <th data-sortable="" style="width: 11.5332%;"><a href="#"
                                                        class="dataTable-sorter">Status</a></th>
                                                <th data-sortable="" style="width: 12.6187%;"><a href="#"
                                                        class="dataTable-sorter">Actions</a></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                                <td>
                                                    <div class="badge bg-primary text-white rounded-pill">Full-time
                                                    </div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                                <td>
                                                    <div class="badge bg-warning rounded-pill">Pending</div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>66</td>
                                                <td>2009/01/12</td>
                                                <td>$86,000</td>
                                                <td>
                                                    <div class="badge bg-secondary text-white rounded-pill">Part-time
                                                    </div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cedric Kelly</td>
                                                <td>Senior Javascript Developer</td>
                                                <td>Edinburgh</td>
                                                <td>22</td>
                                                <td>2012/03/29</td>
                                                <td>$433,060</td>
                                                <td>
                                                    <div class="badge bg-info rounded-pill">Contract</div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Airi Satou</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>33</td>
                                                <td>2008/11/28</td>
                                                <td>$162,700</td>
                                                <td>
                                                    <div class="badge bg-primary text-white rounded-pill">Full-time
                                                    </div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Brielle Williamson</td>
                                                <td>Integration Specialist</td>
                                                <td>New York</td>
                                                <td>61</td>
                                                <td>2012/12/02</td>
                                                <td>$372,000</td>
                                                <td>
                                                    <div class="badge bg-primary text-white rounded-pill">Full-time
                                                    </div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Herrod Chandler</td>
                                                <td>Sales Assistant</td>
                                                <td>San Francisco</td>
                                                <td>59</td>
                                                <td>2012/08/06</td>
                                                <td>$137,500</td>
                                                <td>
                                                    <div class="badge bg-primary text-white rounded-pill">Full-time
                                                    </div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Rhona Davidson</td>
                                                <td>Integration Specialist</td>
                                                <td>Tokyo</td>
                                                <td>55</td>
                                                <td>2010/10/14</td>
                                                <td>$327,900</td>
                                                <td>
                                                    <div class="badge bg-primary text-white rounded-pill">Full-time
                                                    </div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Colleen Hurst</td>
                                                <td>Javascript Developer</td>
                                                <td>San Francisco</td>
                                                <td>39</td>
                                                <td>2009/09/15</td>
                                                <td>$205,500</td>
                                                <td>
                                                    <div class="badge bg-info rounded-pill">Contract</div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sonya Frost</td>
                                                <td>Software Engineer</td>
                                                <td>Edinburgh</td>
                                                <td>23</td>
                                                <td>2008/12/13</td>
                                                <td>$103,600</td>
                                                <td>
                                                    <div class="badge bg-primary text-white rounded-pill">Full-time
                                                    </div>
                                                </td>
                                                <td>
                                                    <button
                                                        class="btn btn-datatable btn-icon btn-transparent-dark me-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-more-vertical">
                                                            <circle cx="12" cy="12" r="1"></circle>
                                                            <circle cx="12" cy="5" r="1"></circle>
                                                            <circle cx="12" cy="19" r="1"></circle>
                                                        </svg></button>
                                                    <button class="btn btn-datatable btn-icon btn-transparent-dark"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="feather feather-trash-2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path
                                                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                            </path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="dataTable-bottom">
                                    <div class="dataTable-info">Showing 1 to 10 of 57 entries</div>
                                    <nav class="dataTable-pagination">
                                        <ul class="dataTable-pagination-list">
                                            <li class="active"><a href="#" data-page="1">1</a></li>
                                            <li class=""><a href="#" data-page="2">2</a></li>
                                            <li class=""><a href="#" data-page="3">3</a></li>
                                            <li class=""><a href="#" data-page="4">4</a></li>
                                            <li class=""><a href="#" data-page="5">5</a></li>
                                            <li class=""><a href="#" data-page="6">6</a></li>
                                            <li class="pager"><a href="#" data-page="2">›</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
</template>

<script>


</script>