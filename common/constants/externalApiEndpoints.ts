/** @format */

export const externalApiEndpoints = {
  baseUrl: 'http://localhost:8000/api/',
  auth: {
    login: 'auth/login',
    logout: 'auth/logout',
  },
  grades: {
    base: 'grades',
    byId: 'grades/{gradeId}',
  },
  books: {
    base: 'books/{bookId}',
    byGradeId: 'grades/{gradeId}/books',
  },
  units: {
    base: 'units/{unit}',
    byBookId: 'books/{bookId}/units',
  },
  chapter: {
    base: 'chapters/{id}',
    byUnitId: 'units/{unitId}/chapters',
  },
  exercise: {
    base: 'topics/{id}/questions',
    byExerciseId: 'questions/{id}',
  },
  topic: {
    base: 'topics/{id}',
    byChapterId: 'chapters/{id}/topics',
  },
}
