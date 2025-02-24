import { create } from "zustand"
import { users } from "../users/users";

export const useAuthStore = create((set) => ({
    AuthUser: null,
    isLoading: false,

    login: (values) => {
        set({ isLoading: true })
        try {
            const filteredUser = users.find((user) => user.Email === values.Email && user.Password === values.Password);
            if (filteredUser) {
                set({ AuthUser: filteredUser })
                if (filteredUser.role === "Recruiter") {
                    return "Recruiter"
                }
                else {
                    return "Interviewer"
                }
            }
            return null;
        } catch (error) {
            alert("Something went Wrong", error);
        } finally {
            set({ isLoading: false })
        }
    },

    logout: () => {
        try {
            set({ AuthUser: null })
        } catch (error) {
            alert("Something went Wrong", error);
        }
    }
}))



