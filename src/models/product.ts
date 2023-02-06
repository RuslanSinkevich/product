export interface IProducts{
    id: number,
    prodName: string,
    prodContent: string,
    prodDetail: {
        count: string,
        weight: string
    }
    prodDescription: string
    prodEnded: boolean
}