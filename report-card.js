$(document).ready(function () {
    $('#add-report-card').click(function () {
        $('#add-report-card').remove();
        $('#report-cards').append($('<table id="table" class="card-table"></table>'));
        $('#table').append($('<thead id="table-head" class="card-table-head"></thead>'));
        $('#table').append($('<tbody id="table-body" class="card-table-body"></tbody>'));
        $('#table-head').append($('<tr id="table-head-row" class="card-table-rows"></tr>'));
        $('#table-head-row').append($('<th class="card-table-items pupil-name">Имя ученика</th>'));
        $('#table-head-row').append($('<th id="new-col" class="card-table-items"><button type="button" id="add-col" class="add-button" name="addCol">&plus;</button></th>'));
        $('#table-body').append($('<th id="new-row" class="card-table-items"><button type="button" id="add-row" class="add-button" name="addRow">&plus;</button></th>'));

        let colCounter1 = 0;
        $('#add-col').click(function () {
            colCounter1++;
            let rowCounter1 = 0;
            $('#new-col').before($(`<th id="col${colCounter1}" class="card-table-items"><input type="text" class="table-cell-input" name="subject${colCounter1}" placeholder="Subject name"></th>`));
            $('#table-body').children().each(function () {
                rowCounter1++;
                $(`#table-body-row${rowCounter1}`).append($(`<td class="card-table-items"><input type="text" class="table-cell-input" name="mark${rowCounter1}${colCounter1}" placeholder="Mark"></td>`));
            });
            widenInput();
        });

        let rowCounter2 = 0;
        $('#add-row').click(function () {
            rowCounter2++;
            let colCounter2 = 0;
            $('#new-row').before($(`<tr id="table-body-row${rowCounter2}"class="card-table-rows"></tr>`));
            $(`#table-body-row${rowCounter2}`).append($(`<th class="card-table-items"><input type="text" class="table-cell-input" name="pupil${rowCounter2}" placeholder="Pupil name"></th>`));
            $('#table-head-row').children().slice(0, -2).each(function () {
                colCounter2++;
                $(`#table-body-row${rowCounter2}`).append($(`<td class="card-table-items"><input type="text" class="table-cell-input" name="mark${rowCounter2}${colCounter2}" placeholder="Mark"></td>`));
            });
            widenInput();
        });

        function widenInput() {
            $('.table-cell-input').on('input', function () {
                $(this).css('width', (($(this).val().length + 1) * 16) + 'px');
                $(this).css('transition', 'none');
                if ($(this).val().length === 0) $(this).css('width', '150px');
            });
        }
    });
});