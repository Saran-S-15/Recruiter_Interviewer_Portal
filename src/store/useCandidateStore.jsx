import { create } from 'zustand';

export const useCandidateStore = create((set) => ({
    candidates: [],

    candidateForm: (data) => {
        try {
            set((prev) => ({
                candidates: [...prev.candidates, data]
            }))
        } catch (error) {
            alert("Something went Wrong", error);
        }
    },

    removeCandidate: (id) => {
        try {
            set((prev) => ({
                candidates: prev.candidates.filter((_, index) => index !== id),
            }));
        } catch (error) {
            alert("Something went Wrong", error);
        }
    },

    assignCandidateToInterviewer: (data, id) => {
        try {
            set((prev) => ({
                candidates: prev.candidates.map((candidate, index) =>
                    index == id - 1 ? { ...candidate, ...data, id:id, Screening_Status:"In Progress" } : candidate
                ),
            }));
        } catch (error) {
            alert("Something went Wrong", error);
        }
    },

    candidateStatus: (data, id) => {
        try {
            set((prev) => ({
                candidates: prev.candidates.map((candidate, index) => index == id - 1 ? { ...candidate, Screening_Status: data.Candidate_Interview_Status } : null)
            }))
        } catch (error) {
            alert("Something went Wrong", error);
        }
    }

}))