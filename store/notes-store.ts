import { create } from 'zustand';


export type Note = {
  id: number,
  title?: string,
  content: string,
}

type NoteStore = {
  notes: Note[],
  addNote: (note: Note) => void,
  updateNote: (note: Note) => void
  deleteNote: (id:Note) => void

}

const NoteStore = create<NoteStore>((set) => ({
  notes: [],
  addNote: ((note) => set((state) => ({
    notes: [...state.notes, note]
  }))),
  updateNote: ((note)=>set((state)=>({
    notes:state.notes.map((n)=>n.id === note.id ? note : n)
  }))),
  deleteNote: ((id) =>set((state)=>({
    notes: state.notes.filter((n)=>n.id !== id.id)
  }))),
  
}))

export default NoteStore