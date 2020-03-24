
<img id="teste_qrcode">

<script src="{{asset('app-assets/assets/js/jquery-3.4.1.min.js')}}"></script>
<script type="text/javascript">
    function dataURLtoBlob(dataURL) {
        var BASE64_MARKER = ';base64,';
        if(dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts = dataURL.split(',');
            var contentType = parts[0].split(':')[1];
            var raw = decodeURIComponent(parts[1]);

            return new Blob([raw], {type: contentType});
        }
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for(var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], {type: contentType});
    }

    function teste_qrcode(){

        var form_data = new FormData();
        var blob = dataURLtoBlob("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEX///8AAABVwtN+AAADjklEQVR42uzYvc30KBQF4IMIyOwGkGiDjJZwA/5pwG6JjDaQaMDOCJDPivkizxea3U3mynqld/QE/jlcX4xf/epXv/rVf1KOtzK3zadNHhBBj4EsXYHFYNMYzA4tiCWYKyTYvoC7kwf1VOoU8+okQ767A5UGZU7U2dUx1OnfADC3khd5O3OUKvoDDAoD9Mg0ljrbNOCvW/0SON4274/jr8C8BACUBupY0uDgIbfwV7BfAlVnxYt6IVnSwnYbx9AXNAMnj5gGmNvl02IpfUGabR1QRUkT9QDtnRZ9geNW8q7gnYZrJ8OgRegKrB6jOWK+Sj6VhuVp5dEXKO1V3qHh5I5P5BRX9AU8CBEBB8F2TDS77QqQppBETLODt+Zinahn9AV1sOZ0XFVdmqxL4Fa6ApU36qG1Mswur+BtMfUFMEfIbGHgFs2utAjy6guUOS3b07EYi7yVFrE+O8xrYNMSKhxmC9+WT/JW3p2B3Ii5/a2iVFhexVyhL2hhG1T+0wREbM9utl2BgihYYh1pjqhFMQxYQldg278icnd1IbfIlkB0BYC38oh1aXlLS4QHn5l8DRxZzG7NannbOjiM5BW6AuTVkUFuJY1FCyZRJPsCl3fb2uOMfBQ9tVmxvRl7AttGxK1gVmlsTw2DlWtfoAxL3l2CIgNPtFQ87uR7AG6FR8lXMRvlDQ2bHi/398DpJebb5oNptnoJ+Qraoytob3PtUUd+mgzlFnj3BU4eRYsid2Ck9uAW5TMwrwHy6apXhjEtTF61nvk4hw6AR4C38EifuTdNnz7WEyizKsCZI3AL1VsNl79S/RYgLYRX5lZtLh3Z+hj6AievP70lmqvILbY+9tw1vwbQsyMjBPNRMkPeXX7ucV4DhYnyCHVwaYA8gSnqKXQFqEuRp5Ir8qmqBzy+AvMaKF6h/SLaaWCG3NoU0RW4NFjM0G3hMy3k2TbpfYGeIsZgroJmSprVV4d5DdoU1MbRs/WBNEWzkaftChy3YDZiiS3SIphb5edlvgZos+5pebRdMwS1IL/25u8BPg/rk2rtbT6K3EpX4HirJMKfVfn5ZlWeTew9sBic2ZX5fFPC1KZreaIv4K4wRrm2+UEPruXhcZldgKvetSttgwQrvj7F9AHydPjkWa6qTvG5pe0AMDgN22bRsWBGncpzv/keuLbYZ/CzDUxTqIOSX4P3W/CrX/3qV7/6H+ufAAAA//9bdu2+I1lC+gAAAABJRU5ErkJggg==");

        form_data.append("arquivo", blob);

        $.ajax({

            url: "{{asset('app-assets/functions/upload.php')}}",
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'POST',
            success: function(resposta){
                console.log(resposta);  
                
            }

        });
    }

    $(document).ready(function(){ 
        var dataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAABlBMVEX///8AAABVwtN+AAADjklEQVR42uzYvc30KBQF4IMIyOwGkGiDjJZwA/5pwG6JjDaQaMDOCJDPivkizxea3U3mynqld/QE/jlcX4xf/epXv/rVf1KOtzK3zadNHhBBj4EsXYHFYNMYzA4tiCWYKyTYvoC7kwf1VOoU8+okQ767A5UGZU7U2dUx1OnfADC3khd5O3OUKvoDDAoD9Mg0ljrbNOCvW/0SON4274/jr8C8BACUBupY0uDgIbfwV7BfAlVnxYt6IVnSwnYbx9AXNAMnj5gGmNvl02IpfUGabR1QRUkT9QDtnRZ9geNW8q7gnYZrJ8OgRegKrB6jOWK+Sj6VhuVp5dEXKO1V3qHh5I5P5BRX9AU8CBEBB8F2TDS77QqQppBETLODt+Zinahn9AV1sOZ0XFVdmqxL4Fa6ApU36qG1Mswur+BtMfUFMEfIbGHgFs2utAjy6guUOS3b07EYi7yVFrE+O8xrYNMSKhxmC9+WT/JW3p2B3Ii5/a2iVFhexVyhL2hhG1T+0wREbM9utl2BgihYYh1pjqhFMQxYQldg278icnd1IbfIlkB0BYC38oh1aXlLS4QHn5l8DRxZzG7NannbOjiM5BW6AuTVkUFuJY1FCyZRJPsCl3fb2uOMfBQ9tVmxvRl7AttGxK1gVmlsTw2DlWtfoAxL3l2CIgNPtFQ87uR7AG6FR8lXMRvlDQ2bHi/398DpJebb5oNptnoJ+Qraoytob3PtUUd+mgzlFnj3BU4eRYsid2Ck9uAW5TMwrwHy6apXhjEtTF61nvk4hw6AR4C38EifuTdNnz7WEyizKsCZI3AL1VsNl79S/RYgLYRX5lZtLh3Z+hj6AievP70lmqvILbY+9tw1vwbQsyMjBPNRMkPeXX7ucV4DhYnyCHVwaYA8gSnqKXQFqEuRp5Ir8qmqBzy+AvMaKF6h/SLaaWCG3NoU0RW4NFjM0G3hMy3k2TbpfYGeIsZgroJmSprVV4d5DdoU1MbRs/WBNEWzkaftChy3YDZiiS3SIphb5edlvgZos+5pebRdMwS1IL/25u8BPg/rk2rtbT6K3EpX4HirJMKfVfn5ZlWeTew9sBic2ZX5fFPC1KZreaIv4K4wRrm2+UEPruXhcZldgKvetSttgwQrvj7F9AHydPjkWa6qTvG5pe0AMDgN22bRsWBGncpzv/keuLbYZ/CzDUxTqIOSX4P3W/CrX/3qV7/6H+ufAAAA//9bdu2+I1lC+gAAAABJRU5ErkJggg==";
        dataURLtoBlob(dataURL);
    });
</script>