function stackedArea(filePath, LineNumber){
    $("#chart1").empty();
    // var histcatexplong = [
    //     {
    //         "key" : "Very Sad" ,
    //         "values" : [ [ 1138683600000 , 27.38478809681] , [ 1141102800000 , 27.371377218208] , [ 1143781200000 , 26.309915460827] , [ 1146369600000 , 26.425199957521] , [ 1149048000000 , 26.823411519395] , [ 1151640000000 , 23.850443591584] , [ 1154318400000 , 23.158355444054] , [ 1156996800000 , 22.998689393694] , [ 1159588800000 , 27.977128511299] , [ 1162270800000 , 29.073672469721] , [ 1164862800000 , 28.587640408904] , [ 1167541200000 , 22.788453687638] , [ 1170219600000 , 22.429199073597] , [ 1172638800000 , 22.324103271051] , [ 1175313600000 , 17.558388444186] , [ 1177905600000 , 16.769518096208] , [ 1180584000000 , 16.214738201302] , [ 1183176000000 , 18.729632971228] , [ 1185854400000 , 18.814523318848] , [ 1188532800000 , 19.789986451358] , [ 1191124800000 , 17.070049054933] , [ 1193803200000 , 16.121349575715] , [ 1196398800000 , 15.141659430091] , [ 1199077200000 , 17.175388025298] , [ 1201755600000 , 17.286592443521] , [ 1204261200000 , 16.323141626569] , [ 1206936000000 , 19.231263773952] , [ 1209528000000 , 18.446256391094] , [ 1212206400000 , 17.822632399764] , [ 1214798400000 , 15.539366475979] , [ 1217476800000 , 15.255131790216] , [ 1220155200000 , 15.660963922593] , [ 1222747200000 , 13.254482273697] , [ 1225425600000 , 11.920796202299] , [ 1228021200000 , 12.122809090925] , [ 1230699600000 , 15.691026271393] , [ 1233378000000 , 14.720881635107] , [ 1235797200000 , 15.387939360044] , [ 1238472000000 , 13.765436672229] , [ 1241064000000 , 14.6314458648] , [ 1243742400000 , 14.292446536221] , [ 1246334400000 , 16.170071367016] , [ 1249012800000 , 15.948135554337] , [ 1251691200000 , 16.612872685134] , [ 1254283200000 , 18.778338719091] , [ 1256961600000 , 16.75602606542] , [ 1259557200000 , 19.385804443147] , [ 1262235600000 , 22.950590240168] , [ 1264914000000 , 23.61159018141] , [ 1267333200000 , 25.708586989581] , [ 1270008000000 , 26.883915999885] , [ 1272600000000 , 25.893486687065] , [ 1275278400000 , 24.678914263176] , [ 1277870400000 , 25.937275793023] , [ 1280548800000 , 29.46138169384] , [ 1283227200000 , 27.357322961862] , [ 1285819200000 , 29.057235285673] , [ 1288497600000 , 28.549434189386] , [ 1291093200000 , 28.506352379723] , [ 1293771600000 , 29.449241421597] , [ 1296450000000 , 25.796838168807] , [ 1298869200000 , 28.740145449189] , [ 1301544000000 , 22.091744141872] , [ 1304136000000 , 25.079662545409] , [ 1306814400000 , 23.674906973064] , [ 1309406400000 , 23.41800274293] , [ 1312084800000 , 23.243644138871] , [ 1314763200000 , 31.591854066817] , [ 1317355200000 , 31.497112374114] , [ 1320033600000 , 26.672380820431] , [ 1322629200000 , 27.297080015495] , [ 1325307600000 , 20.174315530051] , [ 1327986000000 , 19.631084213899] , [ 1330491600000 , 20.366462219462] , [ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     } ,
    //     {
    //         "key" : "Sad" ,
    //         "values" : [ [ 1138683600000 , 7.2800122043237] , [ 1141102800000 , 7.1187787503354] , [ 1143781200000 , 8.351887016482] , [ 1146369600000 , 8.4156698763993] , [ 1149048000000 , 8.1673298604231] , [ 1151640000000 , 5.5132447126042] , [ 1154318400000 , 6.1152537710599] , [ 1156996800000 , 6.076765091942] , [ 1159588800000 , 4.6304473798646] , [ 1162270800000 , 4.6301068469402] , [ 1164862800000 , 4.3466656309389] , [ 1167541200000 , 6.830104897003] , [ 1170219600000 , 7.241633040029] , [ 1172638800000 , 7.1432372054153] , [ 1175313600000 , 10.608942063374] , [ 1177905600000 , 10.914964549494] , [ 1180584000000 , 10.933223880565] , [ 1183176000000 , 8.3457524851265] , [ 1185854400000 , 8.1078413081882] , [ 1188532800000 , 8.2697185922474] , [ 1191124800000 , 8.4742436475968] , [ 1193803200000 , 8.4994601179319] , [ 1196398800000 , 8.7387319683243] , [ 1199077200000 , 6.8829183612895] , [ 1201755600000 , 6.984133637885] , [ 1204261200000 , 7.0860136043287] , [ 1206936000000 , 4.3961787956053] , [ 1209528000000 , 3.8699674365231] , [ 1212206400000 , 3.6928925238305] , [ 1214798400000 , 6.7571718894253] , [ 1217476800000 , 6.4367313362344] , [ 1220155200000 , 6.4048441521454] , [ 1222747200000 , 5.4643833239669] , [ 1225425600000 , 5.3150786833374] , [ 1228021200000 , 5.3011272612576] , [ 1230699600000 , 4.1203601430809] , [ 1233378000000 , 4.0881783200525] , [ 1235797200000 , 4.1928665957189] , [ 1238472000000 , 7.0249415663205] , [ 1241064000000 , 7.006530880769] , [ 1243742400000 , 6.994835633224] , [ 1246334400000 , 6.1220222336254] , [ 1249012800000 , 6.1177436137653] , [ 1251691200000 , 6.1413396231981] , [ 1254283200000 , 4.8046006145874] , [ 1256961600000 , 4.6647600660544] , [ 1259557200000 , 4.544865006255] , [ 1262235600000 , 6.0488249316539] , [ 1264914000000 , 6.3188669540206] , [ 1267333200000 , 6.5873958262306] , [ 1270008000000 , 6.2281189839578] , [ 1272600000000 , 5.8948915746059] , [ 1275278400000 , 5.5967320482214] , [ 1277870400000 , 0.99784432084837] , [ 1280548800000 , 1.0950794175359] , [ 1283227200000 , 0.94479734407491] , [ 1285819200000 , 1.222093988688] , [ 1288497600000 , 1.335093106856] , [ 1291093200000 , 1.3302565104985] , [ 1293771600000 , 1.340824670897] , [ 1296450000000 , 0] , [ 1298869200000 , 0] , [ 1301544000000 , 0] , [ 1304136000000 , 0] , [ 1306814400000 , 0] , [ 1309406400000 , 0] , [ 1312084800000 , 0] , [ 1314763200000 , 0] , [ 1317355200000 , 4.4583692315] , [ 1320033600000 , 3.6493043348059] , [ 1322629200000 , 3.8610064091761] , [ 1325307600000 , 5.5144800685202] , [ 1327986000000 , 5.1750695220792] , [ 1330491600000 , 5.6710066952691] , [ 1333166400000 , 8.5658461590953] , [ 1335758400000 , 8.6135447714243] , [ 1338436800000 , 8.0231460925212]]
    //     } ,
    //     {
    //         "key" : "Neutral" ,
    //         "values" : [ [ 1138683600000 , 1.544303464167] , [ 1141102800000 , 1.4387289432421] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 1.328626801128] , [ 1154318400000 , 1.2874050802627] , [ 1156996800000 , 1.0872743105593] , [ 1159588800000 , 0.96042562635813] , [ 1162270800000 , 0.93139372870616] , [ 1164862800000 , 0.94432167305385] , [ 1167541200000 , 1.277750166208] , [ 1170219600000 , 1.2204893886811] , [ 1172638800000 , 1.207489123122] , [ 1175313600000 , 1.2490651414113] , [ 1177905600000 , 1.2593129913052] , [ 1180584000000 , 1.373329808388] , [ 1183176000000 , 0] , [ 1185854400000 , 0] , [ 1188532800000 , 0] , [ 1191124800000 , 0] , [ 1193803200000 , 0] , [ 1196398800000 , 0] , [ 1199077200000 , 0] , [ 1201755600000 , 0] , [ 1204261200000 , 0] , [ 1206936000000 , 0] , [ 1209528000000 , 0] , [ 1212206400000 , 0] , [ 1214798400000 , 0] , [ 1217476800000 , 0] , [ 1220155200000 , 0] , [ 1222747200000 , 1.4516108933695] , [ 1225425600000 , 1.1856025268225] , [ 1228021200000 , 1.3430470355439] , [ 1230699600000 , 2.2752595354509] , [ 1233378000000 , 2.4031560010523] , [ 1235797200000 , 2.0822430731926] , [ 1238472000000 , 1.5640902826938] , [ 1241064000000 , 1.5812873972356] , [ 1243742400000 , 1.9462448548894] , [ 1246334400000 , 2.9464870223957] , [ 1249012800000 , 3.0744699383222] , [ 1251691200000 , 2.9422304628446] , [ 1254283200000 , 2.7503075599999] , [ 1256961600000 , 2.6506701800427] , [ 1259557200000 , 2.8005425319977] , [ 1262235600000 , 2.6816184971185] , [ 1264914000000 , 2.681206271327] , [ 1267333200000 , 2.8195488011259] , [ 1270008000000 , 0] , [ 1272600000000 , 0] , [ 1275278400000 , 0] , [ 1277870400000 , 1.0687057346382] , [ 1280548800000 , 1.2539400544134] , [ 1283227200000 , 1.1862969445955] , [ 1285819200000 , 0] , [ 1288497600000 , 0] , [ 1291093200000 , 0] , [ 1293771600000 , 0] , [ 1296450000000 , 1.941972859484] , [ 1298869200000 , 2.1142247697552] , [ 1301544000000 , 2.3788590206824] , [ 1304136000000 , 2.5337302877545] , [ 1306814400000 , 2.3163370395199] , [ 1309406400000 , 2.0645451843195] , [ 1312084800000 , 2.1004446672411] , [ 1314763200000 , 3.6301875804303] , [ 1317355200000 , 2.454204664652] , [ 1320033600000 , 2.196082370894] , [ 1322629200000 , 2.3358418255202] , [ 1325307600000 , 0] , [ 1327986000000 , 0] , [ 1330491600000 , 0] , [ 1333166400000 , 0.39001201038526] , [ 1335758400000 , 0.30945472725559] , [ 1338436800000 , 0.31062439305591]]
    //     } ,
    //     {
    //         "key" : "Happy" ,
    //         "values" : [ [ 1138683600000 , 13.356778764352] , [ 1141102800000 , 13.611196863271] , [ 1143781200000 , 6.895903006119] , [ 1146369600000 , 6.9939633271352] , [ 1149048000000 , 6.7241510257675] , [ 1151640000000 , 5.5611293669516] , [ 1154318400000 , 5.6086488714041] , [ 1156996800000 , 5.4962849907033] , [ 1159588800000 , 6.9193153169279] , [ 1162270800000 , 7.0016334389777] , [ 1164862800000 , 6.7865422443273] , [ 1167541200000 , 9.0006454225383] , [ 1170219600000 , 9.2233916171431] , [ 1172638800000 , 8.8929316009479] , [ 1175313600000 , 10.345937520404] , [ 1177905600000 , 10.075914677026] , [ 1180584000000 , 10.089006188111] , [ 1183176000000 , 10.598330295008] , [ 1185854400000 , 9.968954653301] , [ 1188532800000 , 9.7740580198146] , [ 1191124800000 , 10.558483060626] , [ 1193803200000 , 9.9314651823603] , [ 1196398800000 , 9.3997715873769] , [ 1199077200000 , 8.4086493387262] , [ 1201755600000 , 8.9698309085926] , [ 1204261200000 , 8.2778357995396] , [ 1206936000000 , 8.8585045600123] , [ 1209528000000 , 8.7013756413322] , [ 1212206400000 , 7.7933605469443] , [ 1214798400000 , 7.0236183483064] , [ 1217476800000 , 6.9873088186829] , [ 1220155200000 , 6.8031713070097] , [ 1222747200000 , 6.6869531315723] , [ 1225425600000 , 6.138256993963] , [ 1228021200000 , 5.6434994016354] , [ 1230699600000 , 5.495220262512] , [ 1233378000000 , 4.6885326869846] , [ 1235797200000 , 4.4524349883438] , [ 1238472000000 , 5.6766520778185] , [ 1241064000000 , 5.7675774480752] , [ 1243742400000 , 5.7882863168337] , [ 1246334400000 , 7.2666010034924] , [ 1249012800000 , 7.519182132226] , [ 1251691200000 , 7.849651451445] , [ 1254283200000 , 10.383992037985] , [ 1256961600000 , 9.0653691861818] , [ 1259557200000 , 9.6705248324159] , [ 1262235600000 , 10.856380561349] , [ 1264914000000 , 11.27452370892] , [ 1267333200000 , 11.754156529088] , [ 1270008000000 , 8.2870811422456] , [ 1272600000000 , 8.0210264360699] , [ 1275278400000 , 7.5375074474865] , [ 1277870400000 , 8.3419527338039] , [ 1280548800000 , 9.4197471818443] , [ 1283227200000 , 8.7321733185797] , [ 1285819200000 , 9.6627062648126] , [ 1288497600000 , 10.187962234549] , [ 1291093200000 , 9.8144201733476] , [ 1293771600000 , 10.275723361713] , [ 1296450000000 , 16.796066079353] , [ 1298869200000 , 17.543254984075] , [ 1301544000000 , 16.673660675084] , [ 1304136000000 , 17.963944353609] , [ 1306814400000 , 16.637740867211] , [ 1309406400000 , 15.84857094609] , [ 1312084800000 , 14.767303362182] , [ 1314763200000 , 24.778452182432] , [ 1317355200000 , 18.370353229999] , [ 1320033600000 , 15.2531374291] , [ 1322629200000 , 14.989600840649] , [ 1325307600000 , 16.052539160125] , [ 1327986000000 , 16.424390322793] , [ 1330491600000 , 17.884020741105] , [ 1333166400000 , 7.1424929577921] , [ 1335758400000 , 7.8076213051482] , [ 1338436800000 , 7.2462684949232]]
    //     } ,
    //     {
    //         "key" : "Very Happy" ,
    //         "values" : [ [ 1138683600000 , 14.212410956029] , [ 1141102800000 , 13.973193618249] , [ 1143781200000 , 15.218233920665] , [ 1146369600000 , 14.38210972745] , [ 1149048000000 , 13.894310878491] , [ 1151640000000 , 15.593086090032] , [ 1154318400000 , 16.244839695188] , [ 1156996800000 , 16.017088850646] , [ 1159588800000 , 14.183951830055] , [ 1162270800000 , 14.148523245697] , [ 1164862800000 , 13.424326059972] , [ 1167541200000 , 12.974450435753] , [ 1170219600000 , 13.23247041802] , [ 1172638800000 , 13.318762655574] , [ 1175313600000 , 15.961407746104] , [ 1177905600000 , 16.287714639805] , [ 1180584000000 , 16.246590583889] , [ 1183176000000 , 17.564505594809] , [ 1185854400000 , 17.872725373165] , [ 1188532800000 , 18.018998508757] , [ 1191124800000 , 15.584518016603] , [ 1193803200000 , 15.480850647181] , [ 1196398800000 , 15.699120036984] , [ 1199077200000 , 19.184281817226] , [ 1201755600000 , 19.691226605207] , [ 1204261200000 , 18.982314051295] , [ 1206936000000 , 18.707820309008] , [ 1209528000000 , 17.459630929761] , [ 1212206400000 , 16.500616076782] , [ 1214798400000 , 18.086324003979] , [ 1217476800000 , 18.929464156258] , [ 1220155200000 , 18.233728682084] , [ 1222747200000 , 16.315776297325] , [ 1225425600000 , 14.63289219025] , [ 1228021200000 , 14.667835024478] , [ 1230699600000 , 13.946993947308] , [ 1233378000000 , 14.394304684397] , [ 1235797200000 , 13.724462792967] , [ 1238472000000 , 10.930879035806] , [ 1241064000000 , 9.8339915513708] , [ 1243742400000 , 10.053858541872] , [ 1246334400000 , 11.786998438287] , [ 1249012800000 , 11.780994901769] , [ 1251691200000 , 11.305889670276] , [ 1254283200000 , 10.918452290083] , [ 1256961600000 , 9.6811395055706] , [ 1259557200000 , 10.971529744038] , [ 1262235600000 , 13.330210480209] , [ 1264914000000 , 14.592637568961] , [ 1267333200000 , 14.605329141157] , [ 1270008000000 , 13.936853794037] , [ 1272600000000 , 12.189480759072] , [ 1275278400000 , 11.676151385046] , [ 1277870400000 , 13.058852800017] , [ 1280548800000 , 13.62891543203] , [ 1283227200000 , 13.811107569918] , [ 1285819200000 , 13.786494560787] , [ 1288497600000 , 14.04516285753] , [ 1291093200000 , 13.697412447288] , [ 1293771600000 , 13.677681376221] , [ 1296450000000 , 19.961511864531] , [ 1298869200000 , 21.049198298158] , [ 1301544000000 , 22.687631094008] , [ 1304136000000 , 25.469010617433] , [ 1306814400000 , 24.883799437121] , [ 1309406400000 , 24.203843814248] , [ 1312084800000 , 22.138760964038] , [ 1314763200000 , 16.034636966228] , [ 1317355200000 , 15.394958944556] , [ 1320033600000 , 12.625642461969] , [ 1322629200000 , 12.973735699739] , [ 1325307600000 , 15.786018336149] , [ 1327986000000 , 15.227368020134] , [ 1330491600000 , 15.899752650734] , [ 1333166400000 , 18.994731295388] , [ 1335758400000 , 18.450055817702] , [ 1338436800000 , 17.863719889669]]
    //     } 
    // ];
    var format = d3.time.format("%H:%M:%S,%L");
    var colors = d3.scale.category20();
    var nest = d3.nest().key(function(d) { return d.key; });
    var stack = d3.layout.stack()
        .offset("silhouette")
        .values(function(d) { return d.values; })
        .x(function(d) { return d.date; })
        .y(function(d) { return d.value; });
   // var keyColor = function(d, i) {return colors(d.key)};

    var chart;
    nv.addGraph(function() {
        d3.csv(filePath, function(data) {
        data.forEach(function(d) {
            d.date = format.parse(d.timestamp.split(" --> ")[0]);
            d.value = +d.value;
        });

        var firstLine = (LineNumber*5) - 50;
        if (firstLine < 0) firstLine = 0;
        if (firstLine + 100 > data.length) firstLine -= 50;
        var zoomedData=[];
        for(var i = firstLine; i < firstLine+100; i++){
            zoomedData.push(data[i])
        }

        console.log(zoomedData);

        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d.date })
            .y(function(d) { return d.y *100})
            .controlLabels({stacked: "Stacked"})
            .color(["#5dc6d0", "#B0E0E6", "#D3D3D3", "#fdc660", "#FFA500"])
            //.color(["#d53f3f", "#cf6a6a", "#ffffff", "#c1f68e", "#77cc25"])
            .duration(300);
        var layers = stack(nest.entries(zoomedData));
        chart.xAxis.tickFormat(function(d) { return d3.time.format('%X')(new Date(d)) });
        chart.yAxis.tickFormat(d3.format(',.2f'));

        d3.select('#chart1')
            .datum(layers)
            .transition().duration(1000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#chart1 *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });

        nv.utils.windowResize(chart.update);
        return chart;
    });

    });

};