export const PATH = {
    DASHBOARD: "/",
    HOME: "/",
    COURSE: {
        SELF: "/course",
        COURSE_AREA: "/course/area",
        COURSE_LIST: "/course/list",
        COURSE_DETAIL: "/course/list/:1",
    },
    CLASS: {
        SELF: "/class",
        LIST: "/class/list"
    },
    MEMBER: {
        SELF: "/member",
        LIST: "/member/list",
        CARE: "/member/care"
    },
    INVOICE: {
        SELF: "/invoice",
        FEE: "/invoice/fee-list",
        CONFIRM: "/invoice/not-yet-confirm",
        VISA: "/invoice/confirm-visa",
        BANKING: "/invoice/banking"
    },
    REPORT: {
        SELF: "/report",
        MEMBER: "/report/members",
        REVENUE: "/report/revenue",
        COMMISSION: "/report/commission",
        CARE: "/report/care"
    },
    AUTH: {
        SEFT: "/auth",
        LOGIN: "/auth/login"
    }

}