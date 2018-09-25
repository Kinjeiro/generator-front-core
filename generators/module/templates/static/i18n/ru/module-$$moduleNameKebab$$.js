/* eslint-disable max-len */
module.exports = {
  components: {
    <%=entityNameCapital%>New: {
      header: 'Добавить',
      fields: {
        name: {
          label: 'Название',
          placeholder: 'Введите название...',
          description: 'Описание для названия',
        },
        attachments: {
          label: 'Фотографии',
          placeholder: 'Загрузите фотографии',
          description: 'Прикрепите фотографии товара (не более 10).',
        },
      },
      submitButton: 'Сохранить',
      cancelButton: 'Отмена',
    },
  },
};
