export const MENUITEMS = [
    {
        menutitle: "MAIN",
        Items: [
            { path: `/dashboard`, icon: 'fe fe-home', type: 'link', active: false, selected: false, title: 'Dashboard' },
        ]
    },
    {
        menutitle: "UI KIT",

        Items: [

            {
                title: 'Apps', icon: "fe fe-slack", type: 'sub', Name:"",Names:"", active: false, selected: false, children: [

                    { path: `/apps/carddesigns`, type: 'link', active: false, selected: false, title: 'Cards-design' },
                    { path: `/apps/chat`, type: 'link', active: false, selected: false, title: 'Chat' },
                    { path: `/apps/charts`, type: 'link', active: false, selected: false, title: 'Charts' },
                    { path: `/apps/scrollbar`, type: 'link', active: false, selected: false, title: 'Content-Scrollbar' },
                    { path: `/apps/counter`, type: 'link', active: false, selected: false, title: 'Counters' },
                    { path: `/apps/cryptocurrencies`, type: 'link', active: false, selected: false, title: 'Crypto-Currencies' },
                    { path: `/apps/defaultcalender`, type: 'link', active: false, selected: false, title: 'Default-Calender' },
                    { path: `/apps/footer`, type: 'link', active: false, selected: false, title: 'Footers' },
                    { path: `/apps/fullcalender`, type: 'link', active: false, selected: false, title: 'Full-Calender' },
                    { path: `/apps/loader`, type: 'link', active: false, selected: false, title: 'Loaders' },
                    { path: `/apps/notification`, type: 'link', active: false, selected: false, title: 'Notifications' },
                    { path: `/apps/rangeslider`, type: 'link', active: false, selected: false, title: 'Range-slider' },
                    { path: `/apps/rating`, type: 'link', active: false, selected: false, title: 'Rating' },
                    { path: `/apps/search`, type: 'link', active: false, selected: false, title: 'Search' },
                    { path: `/apps/sweet`, type: 'link', active: false, selected: false, title: 'Sweet-alerts' },
                    { path: `/apps/timeline`, type: 'link', active: false, selected: false, title: 'Timeline' },
                    { path: `/apps/treeview`, type: 'link', active: false, selected: false, title: 'TreeView' },
                    { path: `/apps/userlist`, type: 'link', active: false, selected: false, title: 'User-list' },
                    { path: `/apps/widgets`, type: 'link', active: false, selected: false, title: 'Widgets' }

                ]
            },
            {

                title: 'Bootstrap', icon: "fe fe-package", type: 'sub', active: false, selected: false, Names:"mega-slide-menu", Name:"mega-menu", children: [

                    { path: `/bootstrap/accordian`, type: 'link', active: false, selected: false, title: 'Accordians' },
                    { path: `/bootstrap/bootstrapalerts`, type: 'link', active: false, selected: false, title: 'Alerts' },
                    { path: `/bootstrap/avatarradius`, type: 'link', active: false, selected: false, title: 'Avatar-Radius' },
                    { path: `/bootstrap/avatarsquare`, type: 'link', active: false, selected: false, title: 'Avatar-Square' },
                    { path: `/bootstrap/avatarrounded`, type: 'link', active: false, selected: false, title: 'Avatar-Rounded' },
                    { path: `/bootstrap/badgespills`, type: 'link', active: false, selected: false, title: 'BadgesPills' },
                    { path: `/bootstrap/breadcrumbs`, type: 'link', active: false, selected: false, title: 'Breadcrumbs' },
                    { path: `/bootstrap/buttons`, type: 'link', active: false, selected: false, title: 'Buttons' },
                    { path: `/bootstrap/carousels`, type: 'link', active: false, selected: false, title: 'Carousels' },
                    { path: `/bootstrap/colors`, type: 'link', active: false, selected: false, title: 'Colors' },
                    { path: `/bootstrap/dropdowns`, type: 'link', active: false, selected: false, title: 'DropDowns' },
                    { path: `/bootstrap/listgroups`, type: 'link',active: false, selected: false, title: 'List-Groups' },
                    { path: `/bootstrap/mediaobject`, type: 'link', active: false, selected: false, title: 'Media-Object' },
                    { path: `/bootstrap/modal`, type: 'link',active: false, selected: false, title: 'Modal' },
                    { path: `/bootstrap/navigation`, type: 'link', active: false, selected: false, title: 'Navigation' },
                    { path: `/bootstrap/offcanvas`, type: 'link', active: false, selected: false, title: 'OffCanvas' },
                    { path: `/bootstrap/pagination`, type: 'link',active: false, selected: false, title: 'Pagination' },
                    { path: `/bootstrap/panels`, type: 'link', active: false, selected: false, title: 'Panels' },
                    { path: `/bootstrap/progress`, type: 'link', active: false, selected: false, title: 'Progress' },
                    { path: `/bootstrap/tabs`, type: 'link',active: false, selected: false, title: 'Tabs' },
                    { path: `/bootstrap/tags`, type: 'link', title: 'Tags' },
                    { path: `/bootstrap/thumbnails`, type: 'link', title: 'Thumbnails' },
                    { path: `/bootstrap/toast`, type: 'link', title: 'Toast' },
                    { path: `/bootstrap/tooltippopover`, type: 'link', title: 'Tooltip Popover' },
                    { path: `/bootstrap/typography`, type: 'link', title: 'Typography' },
                    { path: `/bootstrap/ribbons`, type: 'link', title: 'Ribbons' },
                ]
            },

            { path: `/landingPage/landingPage`, badge: "badge bg-green br-5 side-badge blink-text pb-1",badgetxt:"New", icon: 'fe fe-zap', type: 'link', active: true, selected: false, title: 'Landing Page' },
        ]
    },
    {
        menutitle: "PRE-BUILD-PAGES",
        Items: [
            {
                title: 'Pages', icon: "fe fe-layers", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/pages/editprofile`, type: 'link', active: false, selected: false, title: 'Edit-profile' },
                    { path: `/pages/gallery`, type: 'link', active: false, selected: false, title: 'Gallery' },
                    { path: `/pages/mailcompose`, type: 'link', active: false, selected: false, title: 'Mail-compose' },
                    { path: `/pages/mailinbox`, type: 'link', active: false, selected: false, title: 'Mail-inbox' },
                    { path: `/pages/mailread`, type: 'link', active: false, selected: false, title: 'Mail-read' },
                    { path: `/pages/notificationlist`, type: 'link', active: false, selected: false, title: 'Notification-list' },
                    { path: `/pages/profile`, type: 'link', active: false, selected: false, title: 'Profile' },
                    

                    {
                        title: 'Forms', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `/pages/forms/formadvanced`, type: 'link', active: false, selected: false, title: 'Form-advanced' },
                            { path: `/pages/forms/formeditor`, type: 'link', active: false, selected: false, title: 'Form-editor' },
                            { path: `/pages/forms/formelements`, type: 'link', active: false, selected: false, title: 'Form-elements' },
                            { path: `/pages/forms/formlayouts`, type: 'link', active: false, selected: false, title: 'Form-layouts' },
                            { path: `/pages/forms/formvalidation`, type: 'link', active: false, selected: false, title: 'Form-validation' },
                            { path: `/pages/forms/formwizard`, type: 'link', active: false, selected: false, title: 'Form-wizard' },
                            { path: `/pages/forms/forminputspinner`, type: 'link', active: false, selected: false, title: 'Form-input-spinner' },
                        ]
                    },
                    {
                        title: 'Table', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `/pages/tables/datatables`, type: 'link', active: false, selected: false, title: 'Data-Table' },
                            { path: `/pages/tables/defaulttables`, type: 'link', active: false, selected: false, title: 'Default-Table' },
                            { path: `/pages/tables/edittables`, type: 'link', active: false, selected: false, title: 'Edit-Table' },
                        ]
                    },
                    {
                        title: 'Extension', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `/pages/extension/aboutcompany`, type: 'link', active: false, selected: false, title: 'About Company' },
                            { path: `/pages/extension/blogdetails`, type: 'link', active: false, selected: false, title: 'Blog Details' },
                            { path: `/pages/extension/blogpost`, type: 'link', active: false, selected: false, title: 'Blog Post' },
                            { path: `/pages/extension/blogs`, type: 'link', active: false, selected: false, title: 'Blogs' },
                            { path: `/pages/extension/emptypage`, type: 'link', active: false, selected: false, title: 'EmptyPage' },
                            { path: `/pages/extension/faqs`, type: 'link', active: false, selected: false, title: 'FAQS' },
                            { path: `/pages/extension/invoice`, type: 'link', active: false, selected: false, title: 'Invoice' },
                            { path: `/pages/extension/pricing`, type: 'link', active: false, selected: false, title: 'Pricing Table' },
                            { path: `/pages/extension/services`, type: 'link', active: false, selected: false, title: 'Services' },
                            { path: `/pages/extension/setting`, type: 'link', active: false, selected: false, title: 'Settings' },
                            { path: `/pages/extension/term`, type: 'link', active: false, selected: false, title: 'Terms' },
                            { path: `/pages/extension/underconstruction`, type: 'link', active: false, selected: false, title: 'UnderConstruction' },

                        ]
                    },
                    { path: `/pages/switcher/switcherstyle1`, type: 'link', active: false, selected: false, title: 'Switcher' },
                    
                ]
            },
            {
                title: 'E-commerce', icon: "fe fe-shopping-bag", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/ecommerce/addproduct`, type: 'link', active: false, selected: false, title: 'Add Product' },
                    { path: `/ecommerce/checkout`, type: 'link', active: false, selected: false, title: 'Checkout' },
                    { path: `/ecommerce/productdetails`, type: 'link', active: false, selected: false, title: 'Product Details' },
                    { path: `/ecommerce/shop`, type: 'link', active: false, selected: false, title: 'Shop' },
                    { path: `/ecommerce/shoppingcart`, type: 'link', active: false, selected: false, title: 'ShoppingCart' },
                    { path: `/ecommerce/wishlist`, type: 'link', active: false, selected: false, title: 'Wishlist' },
                ]
            },
            {
                title: 'File-Manager', icon: "fe fe-folder", badge: "badge bg-pink side-badge", badgetxt: "4", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/filemanager/fileattachments`, type: 'link', active: false, selected: false, title: 'File-Attachments' },
                    { path: `/filemanager/filedetails`, type: 'link', active: false, selected: false, title: 'File Details' },
                    { path: `/filemanager/filemanager`, type: 'link', active: false, selected: false, title: 'File Manager' },
                    { path: `/filemanager/filemanagerlist`, type: 'link', active: false, selected: false, title: 'File-ManagerList' },
                ]
            },
        ]
    },

    {
        menutitle: "MISC PAGES",
        Items: [
            {
                title: 'Authentication', icon: "fe fe-users", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [
                    { path: `/authentication/login`, type: 'link', active: false, selected: false, title: 'Login' },
                    { path: `/authentication/register`, type: 'link', active: false, selected: false, title: 'Register' },
                    { path: `/authentication/forgotpassword`, type: 'link', active: false, selected: false, title: 'Forgot Password' },
                    { path: `/authentication/lockscreen`, type: 'link', active: false, selected: false, title: 'LockScreen' },
                    {
                        title: 'ErrorPage', icon: "ti-face-smile", type: 'sub',Name:"",Names:"", active: false, selected: false, children: [

                            { path: `/authentication/errorpage/error400`, type: 'link', active: false, selected: false, title: 'Error400' },
                            { path: `/authentication/errorpage/error401`, type: 'link', active: false, selected: false, title: 'Error401' },
                            { path: `/authentication/errorpage/error403`, type: 'link', active: false, selected: false, title: 'Error403' },
                            { path: `/authentication/errorpage/error404`, type: 'link', active: false, selected: false, title: 'Error404' },
                            { path: `/authentication/errorpage/error500`, type: 'link', active: false, selected: false, title: 'Error500' },
                            { path: `/authentication/errorpage/error503`, type: 'link', active: false, selected: false, title: 'Error503' },

                        ]
                    },
                ]
            },
        ]
    },

    {
        menutitle: "GENERAL",
        Items: [





            {
                title: 'Maps', icon: "fe fe-map-pin", type: 'sub',Name:"",Names:"", children: [
                    { path: `/maps/leafletmaps`, type: 'link', active: false, selected: false, title: 'Leaflet-Maps' },
                    { path: `/maps/simplemaps`, type: 'link', active: false, selected: false, title: 'Simple-Maps' },
                ]
            },
            {
                title: 'Charts', icon: "fe fe-bar-chart-2", type: 'sub',Name:"",Names:"", badge: "badge bg-secondary side-badge", badgetxt: "6", children: [
                    { path: `/charts/chartjs`, type: 'link', active: false, selected: false, title: ' Chartjs' },
                    {
                        path: `/charts/echart`, type: 'sub',Name:"",Names:"", title: ' Echart', children: [

                            { path: `/charts/echart/lines`, type: 'link', active: false, selected: false, title: ' Line Chart' },
                            { path: `/charts/echart/bar`, type: 'link', active: false, selected: false, title: ' Bar Chart' },
                            { path: `/charts/echart/candlestick`, type: 'link', active: false, selected: false, title: ' Candle Stick Chart' },
                            
                            { path: `/charts/echart/scatter`, type: 'link', active: false, selected: false, title: ' Scatter Chart' },
                            { path: `/charts/echart/tree`, type: 'link', active: false, selected: false, title: ' Tree Chart' },

                        ]
                    },

                    {
                        path: `/charts/apexchart`, type: 'sub',Name:"",Names:"", title: ' ApexChart', children: [

                            { path: `/charts/apexchart/line`, type: 'link', active: false, selected: false, title: ' Line Chart' },
                            { path: `/charts/apexchart/area`, type: 'link', active: false, selected: false, title: ' Area Chart' },
                            { path: `/charts/apexchart/column`, type: 'link', active: false, selected: false, title: ' Column Chart' },
                            { path: `/charts/apexchart/bar`, type: 'link', active: false, selected: false, title: ' Bar Chart' },
                            { path: `/charts/apexchart/mixed`, type: 'link', active: false, selected: false, title: ' Mixed Chart' },
                            { path: `/charts/apexchart/timeline`, type: 'link', active: false, selected: false, title: ' Timeline Chart' },
                            { path: `/charts/apexchart/candlestick`, type: 'link', active: false, selected: false, title: ' CandleStick Chart' },
                            { path: `/charts/apexchart/boxplot`, type: 'link', active: false, selected: false, title: ' Boxplot Chart' },
                            { path: `/charts/apexchart/treemap`, type: 'link', active: false, selected: false, title: ' Treemap Chart' },
                            { path: `/charts/apexchart/pie`, type: 'link', active: false, selected: false, title: ' Pie Chart' },
                            { path: `/charts/apexchart/radialbar`, type: 'link', active: false, selected: false, title: ' Radialbar Chart' },
                            { path: `/charts/apexchart/radar`, type: 'link', active: false, selected: false, title: ' Radar Chart' },
                            { path: `/charts/apexchart/polararea`, type: 'link', active: false, selected: false, title: ' PolarArea Chart' },

                        ]
                    },
                ]
            },
            {
                title: 'Icons', icon: "fe fe-wind", type: 'sub',Name:"",Names:"", children: [
                    { path: `/icons/bootstrapicons`, type: 'link', active: false, selected: false, title: 'Bootstrap Icons' },
                    { path: `/icons/feathericons`, type: 'link', active: false, selected: false, title: ' Feather Icons' },
                    { path: `/icons/flagicons`, type: 'link', active: false, selected: false, title: ' Flag Icons' },
                    { path: `/icons/fontawesome`, type: 'link', active: false, selected: false, title: 'Font-Awesome Icons' },
                    { path: `/icons/ionicicons`, type: 'link', active: false, selected: false, title: ' Ionic Icons' },
                    { path: `/icons/materialdesignicons`, type: 'link', active: false, selected: false, title: ' MaterialDesign Icons' },
                    { path: `/icons/pe7icons`, type: 'link', active: false, selected: false, title: ' Pe7 Icons' },
                    { path: `/icons/simplelineicons`, type: 'link', active: false, selected: false, title: 'Simpleline Icons' },
                    { path: `/icons/themifyicons`, type: 'link', active: false, selected: false, title: ' Themify Icons' },
                    { path: `/icons/typiconsicons`, type: 'link', active: false, selected: false, title: ' Typicons Icons' },
                    { path: `/icons/weathericons`, type: 'link', active: false, selected: false, title: ' Weather Icons' },
                ]
            },

        ]
    },
]