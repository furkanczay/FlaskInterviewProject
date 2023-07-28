$(document).ready(function() {
            let soruSayisi = 0;

            $("#yeniSoruBtn").on("click", function() {
                soruSayisi++;
                let soruHTML = '<div class="soru">';
                soruHTML += '<h3>Soru ' + soruSayisi + ': <input type="text" class="form-control" name="soru[]" placeholder="Sorunuzu girin"></h3>';
                soruHTML += '<select name="cevapTuru' + soruSayisi + '">';
                soruHTML += '<option value="kisaMetin">Kısa Metin</option>';
                soruHTML += '<option value="coktanSecmeli">Çoktan Seçmeli</option>';
                soruHTML += '</select><br>';
                soruHTML += '<div class="cevapAlani" id="cevapAlani' + soruSayisi + '"></div>';
                soruHTML += '</div>';

                $("#soruFormAlani").append(soruHTML);
            });

            // Cevap türü seçimi değiştiğinde, cevap alanını dinamik olarak güncelle
            $(document).on("change", "select[name^='cevapTuru']", function() {
                let soruIndex = $(this).attr("name").match(/\d+/)[0];
                let cevapAlaniHTML = "";

                if ($(this).val() === "kisaMetin") {
                    cevapAlaniHTML = '<input type="text" name="cevap' + soruIndex + '">';
                } else if ($(this).val() === "coktanSecmeli") {
                    cevapAlaniHTML += '<input type="radio" name="cevap' + soruIndex + '" value="cevap' + soruIndex + 'a">Cevap A<br>';
                    cevapAlaniHTML += '<input type="radio" name="cevap' + soruIndex + '" value="cevap' + soruIndex + 'b">Cevap B<br>';
                    cevapAlaniHTML += '<input type="radio" name="cevap' + soruIndex + '" value="cevap' + soruIndex + 'c">Cevap C<br>';
                }

                $("#cevapAlani" + soruIndex).html(cevapAlaniHTML);
            });

            $("#formuGonder").on("click", function() {
                // Formu sunucuya gönderme işlemleri burada yapılabilir.
                // Örneğin, AJAX kullanarak form verilerini sunucuya gönderebilirsiniz.
                alert("Form başarıyla gönderildi!");
            });
        });