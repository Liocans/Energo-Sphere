export interface IFormable{
    
    formHeader: string;

    createFormDialog(): void;
    editFormDialog(data: any): void;
}