﻿var DoIzendaConfig = function () {
    var hostApi = "http://localhost:3001/api/";
    var configJson = {
        "WebApiUrl": hostApi,
        "BaseUrl": "/izenda",
        "RootPath": "/Scripts/izenda",
        "CssFile": "izenda-ui.css",
        "Routes": {
            "Settings": "settings",
            "New": "new",
            "Dashboard": "dashboard",
            "Report": "report",
            "ReportViewer": "reportviewer",
            "ReportViewerPopup": "reportviewerpopup",
            "Viewer": "viewer"
        },
        "OnReceiveUnauthorizedResponse": redirectToUnauthorizedResponsePage,
        "Timeout": 3600
    };
    IzendaSynergy.config(configJson);

};

function errorFunc() {
    // confirm dialog
    alertify.confirm("Your token was not generated correctly, please login.", function () {
        // user clicked "ok"
        window.location.href = "/Account/Login";
    }, function() {
        // user clicked "cancel"
        window.location.href = "/";
    });
}

function redirectToUnauthorizedResponsePage() {
     window.location.href = "/Account/Unauthorized";
}

var DoRender = function (successFunc) {
    $.ajax({
        type: "GET",
        url: "/user/GenerateToken",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: successFunc,
        error: errorFunc
    });
};



var izendaInit = function () {
    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.render(document.getElementById('izenda-root'));
    }

    this.DoRender(successFunc);

};

var izendaInitReport = function () {

    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderReportPage(document.getElementById('izenda-root'));
    }

    this.DoRender(successFunc);

};

var izendaInitSetting = function () {

    function successFunc(data, status) {
        console.info(data);
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderSettingPage(document.getElementById('izenda-root'));
    }

    this.DoRender(successFunc);
};

var izendaInitReportPart = function (reportParts) {

    function successFunc(data, status) {
        console.info(data);
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        for (var i = 0; i < reportParts.length; i++) {
            if (reportParts[i].overridingFilterValue) {
                IzendaSynergy.renderReportPart(document.getElementById(reportParts[i].selector), {
                    "id": reportParts[i].id,
                    "overridingFilterValue": reportParts[i].overridingFilterValue,
                });
            }
            else {
                IzendaSynergy.renderReportPart(document.getElementById(reportParts[i].selector), {
                    "id": reportParts[i].id
                });
            }

        }
    }

    this.DoRender(successFunc);
};

var izendaInitReportPartUpdateResult = function (reportPartId, overridingFilterValue, container) {

    function successFunc(data, status) {
        console.info(data);
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderReportPart(document.getElementById(container), {
            "id": reportPartId,
            "overridingFilterValue": overridingFilterValue,
        });
    }

    this.DoRender(successFunc);
};

var izendaRenderReportPart = function (reportPartId, container) {

    function successFunc(data, status) {
        console.info(data);
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderReportPart(document.getElementById(container), {
            "id": reportPartId
        });
    }

    this.DoRender(successFunc);
};

var izendaInitReport = function () {

    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderReportPage(document.getElementById('izenda-root'));
    }

    this.DoRender(successFunc);

};

// Render report viewer to a <div> tag by report id
var izendaInitReportViewer = function (reportId, filters) {
    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };
        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderReportViewerPage(document.getElementById('izenda-root'), reportId, filters);
    }

    this.DoRender(successFunc);

};

var izendaInitIframeViewer = function (reportId, filters) {
    IzendaSynergy.renderReportViewerPage(document.getElementById('izenda-root'), reportId, filters);
};

var izendaInitReportCustomFilters = function (reportObject) {

    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        if (reportObject.filtersObj) {
            IzendaSynergy.renderReportViewerPage(document.getElementById(reportObject.selector), reportObject.id, reportObject.filtersObj);
        }
        else {
            IzendaSynergy.renderReportViewerPage(document.getElementById(reportObject.selector), reportObject.id);
        }
    }

    this.DoRender(successFunc);

};

var izendaInitDashboard = function () {

    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderDashboardPage(document.getElementById('izenda-root'));
    }

    this.DoRender(successFunc);

};

// Render dashboard viewer to a <div> tag by dashboard id
var izendaInitDashboardViewer = function (dashboardId, filters) {
    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };
        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderDashboardViewerPage(document.getElementById('izenda-root'), dashboardId, filters);
    }

    this.DoRender(successFunc);
};

var izendaInitReportDesigner = function () {

    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderReportDesignerPage(document.getElementById('izenda-root'));
        
    }

    this.DoRender(successFunc);

};

var izendaInitNewDashboard = function () {

    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderNewDashboardPage(document.getElementById('izenda-root'));
    }

    this.DoRender(successFunc);

};

var izendaInitReportPartExportViewer = function (reportPartId, token) {
    var currentUserContext = {
        token: token
    };
    IzendaSynergy.setCurrentUserContext(currentUserContext);
    IzendaSynergy.renderReportPart(document.getElementById('izenda-root'), {
        id: reportPartId,
        useQueryParam: true,
        useHash: false
    });
};

var izendaInitRenderExportManagerPage = function () {
    function successFunc(data, status) {
        var currentUserContext = {
            token: data.token
        };

        IzendaSynergy.setCurrentUserContext(currentUserContext);
        IzendaSynergy.renderExportManagerPage(document.getElementById('izenda-root'));
    }
    this.DoRender(successFunc);
};
