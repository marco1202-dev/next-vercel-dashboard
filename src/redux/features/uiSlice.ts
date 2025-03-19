import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  sidebarExpanded: boolean;
  mobileSidebarOpen: boolean;
}

const initialState: UiState = {
  sidebarExpanded: true, // Default to expanded on desktop
  mobileSidebarOpen: false, // Default to closed on mobile
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarExpanded = !state.sidebarExpanded;
    },
    setSidebarExpanded: (state, action: PayloadAction<boolean>) => {
      state.sidebarExpanded = action.payload;
    },
    toggleMobileSidebar: (state) => {
      console.log("Toggling mobile sidebar in Redux", state.mobileSidebarOpen);
      state.mobileSidebarOpen = !state.mobileSidebarOpen;
    },
    setMobileSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileSidebarOpen = action.payload;
    },
  },
});

export const { 
  toggleSidebar, 
  setSidebarExpanded, 
  toggleMobileSidebar, 
  setMobileSidebarOpen 
} = uiSlice.actions;

export default uiSlice.reducer; 