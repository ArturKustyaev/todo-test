export interface Todo {
	id: number
	title: string
	checked: boolean
}

export type Filter = 'all' | 'active' | 'completed'
