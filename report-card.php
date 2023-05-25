<?php
include "./page-components/start.php";
include "./page-components/nav.php";
$main_header = "Report card";
include "./page-components/header.php";
?>
<main>
    <table class="card-table">
        <thead class="card-table-head">
            <tr class="card-table-rows">
                <th class="card-table-items pupil-name">Имя ученика</th>
                <th class="card-table-items">Математика</th>
                <th class="card-table-items">Физика</th>
                <th class="card-table-items">Химия</th>
                <th class="card-table-items">История</th>
                <th class="card-table-items">Английский язык</th>
                <th class="card-table-items">Средний балл по всем предметам</th>
            </tr>
        </thead>
        <tbody class="card-table-body">
            <tr class="card-table-rows">
                <th class="card-table-items">Игорь Иванов</th>
                <td class="card-table-items">10</td>
                <td class="card-table-items">9</td>
                <td class="card-table-items">11</td>
                <td class="card-table-items">8</td>
                <td class="card-table-items">6</td>
                <td class="card-table-items"></td>
            </tr>
            <tr class="card-table-rows">
                <th class="card-table-items">Александра Загорная</th>
                <td class="card-table-items">11</td>
                <td class="card-table-items">5</td>
                <td class="card-table-items">10</td>
                <td class="card-table-items">6</td>
                <td class="card-table-items">7</td>
                <td class="card-table-items"></td>
            </tr>
        </tbody>
    </table>
</main>
<?php
include "./page-components/footer.php";
include "./page-components/end.php";
