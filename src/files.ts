enum FilePickerType {
    Choose = 1,
    Move = 2,
    Copy = 3,
    CopyMove = 4,
}

export function pickFileOrDirectory(
    title: String,
    multiselect: Boolean = false,
    mimeTypeFilter: Array<String> = [],
    modal: Boolean = false,
    type: FilePickerType = FilePickerType.Choose
): Promise<String> {
    return new Promise((res, rej) => {
        OC.dialogs.filepicker(
            title,
            res,
            multiselect,
            mimeTypeFilter,
            modal,
            type
        )
    })
}
