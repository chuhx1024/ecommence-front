export let API: string

if (process.env.NODE_ENV === "development") {
    // Type 'string | undefined' is not assignable to type 'string'. 
    // 添加非空断言 !
    API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else {
    API = process.env.REACT_APP_PRODUCTION_API_URL!
}
