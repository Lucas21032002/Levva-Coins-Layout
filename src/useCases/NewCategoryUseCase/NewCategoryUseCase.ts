import { loadCategory, loadCreateCategoryDone, loadCategoryFail } from "../../stores/NewCategoryStore/NewCategoryEvents";

import { newCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";
import { NewCategoryService } from "../../services/CategoryService/CategoryService";

const execute = async ({
    description,
}: newCategoryParams): Promise<void> => {
    loadCategory();

    return NewCategoryService.createCategory({
        description
    })
    .then(() => {
        loadCreateCategoryDone();
    })
    .catch(({hasError, message}: RequestError ) => {
        loadCategoryFail({hasError, message});
        throw new Error();
        }
    )
};

const NewCategoryUseCase = {
    execute,
}

export default NewCategoryUseCase;