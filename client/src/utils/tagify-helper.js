// Tagify settings object
const baseTagifySettings = {
    maxTags: 6,
    backspace: 'edit',
    placeholder: 'Labels',
    dropdown: {
        enabled: 0 // a;ways show suggestions dropdown
    }
};

const createTagifyCallbacks = (callback) => ({
    add: callback,
    remove: callback,
    input: callback,
    edit: callback,
    invalid: callback,
    click: callback,
    keydown: callback,
    focus: callback,
    blur: callback,
    'edit:input': callback,
    'edit:updated': callback,
    'edit:start': callback,
    'edit:keydown': callback,
    'dropdown:show': callback,
    'dropdown:hide': callback,
    'dropdown:select': callback
});

const tagifySettings = {
    ...baseTagifySettings
};

export { createTagifyCallbacks, tagifySettings };
