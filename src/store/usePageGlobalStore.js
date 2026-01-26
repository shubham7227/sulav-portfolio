import { create } from "zustand";
import defaultData from "../data/defaultData.json";

const usePageGlobalStore = create((set) => ({
  pageData: defaultData,
  setPageData: (updatedPageData) => set(() => ({ pageData: updatedPageData })),
}));

export const getProjectData = (state) => state.pageData.projects;
export const getExperienceData = (state) => state.pageData.experience;
export const getProfileData = (state) => state.pageData.profile;

export default usePageGlobalStore;
