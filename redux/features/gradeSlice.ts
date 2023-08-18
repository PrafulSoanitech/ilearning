import { createSlice } from '@reduxjs/toolkit'

interface GradeState {
  grades: { string: any }[]
  grade: any
}

const initialState: GradeState = {
  grades: [],
  grade: {},
}

const gradeSlice = createSlice({
  name: 'grade',
  initialState,
  reducers: {
    setGrades(state, action) {
      state.grades = action.payload
    },
    setGrade(state, action) {
      state.grade = action.payload
    },
  },
})

export const { setGrades, setGrade } = gradeSlice.actions
export default gradeSlice.reducer
