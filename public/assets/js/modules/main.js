'use strict';

// Модуль приложения
let app = (function ($) {

    // Инициализируем нужные переменные
    let apiUrl = '/api',
        ui = {
            $categories: $('#categories'),
            $goods: $('#goods')
        };

    // Инициализация дерева категорий с помощью jstree
    function _initTree(data) {
        console.log('data: ', data);

        let category;
        ui.$categories.jstree({
            core: {
                check_callback: true,
                multiple: false,
                data: data
            },
            plugins: ['dnd']
        }).bind('changed.jstree', function (e, data) {
            category = data.node.text;
            ui.$goods.html('Товары из категории ' + category);
            console.log('changed node: ', data);
        });
    }

    // Загрузка категорий с сервера
    function _loadData() {
        let params = {};

        $.ajax({
            url: apiUrl + '/categories',
            method: 'GET',
            data: params,
            dataType: 'json',
            success: function (resp) {
                // Инициализируем дерево категорий
                if (resp.code === 'success') {
                    _initTree(resp.result);
                } else {
                    console.error('Ошибка получения данных с сервера: ', resp.message);
                }
            },
            error: function (error) {
                console.error('Ошибка: ', error);
            }
        });
    }

    // Инициализация приложения
    function init() {
        _loadData();
    }

    // Экспортируем наружу
    return {
        init: init
    }

})(jQuery);

jQuery(document).ready(app.init);
