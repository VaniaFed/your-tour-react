import { FilterType } from 'types/filter-type';
import { TaskType } from 'types/task-type';

export interface StoreType {
	tasks: TaskType[];
	filter: FilterType;
}
