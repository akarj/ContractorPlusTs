export interface Material {
	Name: string;
	Rate: number;
	Quantity: number;
	Total: number;
}

export interface Task {
	Title: string;
	Description: string;
	Material: Material[];
}

export interface Group {
	Task: Task[];
}

export interface Estimate {
	Title: string;
	ExpiryDate: string;
	Group: Group[];
}

export interface FormData {
	Estimate: Estimate;
}
