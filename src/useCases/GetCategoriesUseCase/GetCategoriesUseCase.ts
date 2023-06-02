import { loadCategory, loadCategoryFail, loadCategoryDone } from "../../stores/NewCategoryStore/NewCategoryEvents";

import { CategoryValues } from "../../domain/category";
import { RequestError } from "../../domain/request";
import { NewCategoryService } from "../../services/CategoryService/CategoryService";

const execute = async (): Promise<void> => {
    loadCategory();

    return NewCategoryService.getCategories()
    .then((categories: CategoryValues[]) => {
        loadCategoryDone(categories);
    })
    .catch(({hasError, message}: RequestError ) => {
        loadCategoryFail({hasError, message});
        throw new Error();
        }
    )
};

const GetCategoryUseCase = {
    execute,
}

export default GetCategoryUseCase;