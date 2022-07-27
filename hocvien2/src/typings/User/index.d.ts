import { TypeBoolean } from "typings"
export interface IUserResponse {
    permissions: string[];
    user: IUser,
    token: string;

}
export interface IUser {
    activation_code: string;
    active: TypeBoolean;
    address: string
    address_contact: string
    admin_user_shift_id: number
    bank_account: string
    bank_number: string
    birthday: string
    can_work: number
    checkin_late_allow: TypeBoolean
    checkout_early_allow: TypeBoolean
    collabor_type: string
    company_id: number
    contract: number
    contract_id: number
    created_on: number
    customer_id: number
    date_end: string
    date_start: string
    degree_id: number
    district_id: number
    email: string
    first_name: string
    forgotten_password_code: string
    forgotten_password_time: string;
    groups: IGroup,
    id: number
    id_card: string
    id_cls: number
    id_date: string
    image_url: string
    ip_address: string
    is_deleted: TypeBoolean
    is_return: TypeBoolean
    last_action: number
    last_login: number
    last_name: string
    level_id: number
    line: string
    literacy_id: TypeBoolean
    main_group_id: number
    main_store_id: number
    nation_id: TypeBoolean
    online: TypeBoolean
    parent_id: number
    phone: string
    phone_contact: string
    position: string
    position_id: number
    province_id: number
    reason_id: TypeBoolean
    remember_code: string
    salary_security: TypeBoolean
    salt: null
    sex: TypeBoolean
    status: number
    tag_name: string
    user_created_id: number
    user_permission: number[];
    username: string
    verify: TypeBoolean
    wp_id: string

}
export interface IUserLocalStorage {
    token: string;
    id: number;
    email: string;
    first_name: string;
    username: string;
    image_url: string;
}
export interface IGroup {
    group_name: string
    id: number;
    name: string
}