from flask import Flask, render_template, jsonify, request, session, redirect, url_for
import sqlite3


app = Flask(__name__)

RaupoDB = 'RaupoDB.db'


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')






@app.route('/Lana', methods=['GET'])
def lana():

    return render_template('Lana.html')












#Retrieving the data for LANA




@app.route('/SoilMoistureLana', methods=['GET'])
def SoilMoistureLana():
    con = sqlite3.connect(RaupoDB)
    SoilMoistureLana = []
    cur = con.execute('SELECT * FROM SoilMoisture WHERE block = "Lana" ')

    for row in cur:
        SoilMoistureLana.append(list(row))
    con.close()
    # return render_template('Lana.html', SoilMoisture=SoilMoisture)
    return jsonify(SoilMoistureLana)
    # return render_template('Lana.html', SoilMoisture=SoilMoisture)


@app.route('/IrrigationLana', methods=['GET'])
def IrrigationLana():
    con = sqlite3.connect(RaupoDB)
    IrrigationLana = []
    cur = con.execute('SELECT * FROM Irrigation WHERE block = "Lana" ')

    for row in cur:
        IrrigationLana.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(IrrigationLana)


@app.route('/GrowthLana', methods=['GET'])
def growthLana():
    con = sqlite3.connect(RaupoDB)
    growthLana = []
    cur = con.execute('SELECT * FROM Growth  WHERE block = "Lana" ')

    for row in cur:
        growthLana.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(growthLana)






@app.route('/brokenPostsLana', methods=['GET'])
def postsLana():
    con = sqlite3.connect(RaupoDB)
    postsLana = []
    cur = con.execute('SELECT * FROM BrokenPosts WHERE block = "Lana" ')

    for row in cur:
        postsLana.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(postsLana)





@app.route('/SprayLana', methods=['GET'])
def sprayLana():
    con = sqlite3.connect(RaupoDB)
    spray = []
    cur = con.execute('SELECT * FROM Spray WHERE block = "Lana" ')

    for row in cur:
        spray.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(spray)



@app.route('/DiseaseLana', methods=['GET'])
def diseaseLana():
    con = sqlite3.connect(RaupoDB)
    diseaseLana = []
    cur = con.execute('SELECT * FROM Disease WHERE block = "Lana" ')

    for row in cur:
        diseaseLana.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(diseaseLana)

















#Retrieving the data for LOUIS




@app.route('/SoilMoistureLouis', methods=['GET'])
def SoilMoistureLouis():
    con = sqlite3.connect(RaupoDB)
    SoilMoistureLouis = []
    cur = con.execute('SELECT * FROM SoilMoisture WHERE block = "Louis" ')

    for row in cur:
        SoilMoistureLouis.append(list(row))
    con.close()
    # return render_template('Lana.html', SoilMoisture=SoilMoisture)
    return jsonify(SoilMoistureLouis)
    # return render_template('Lana.html', SoilMoisture=SoilMoisture)


@app.route('/IrrigationLouis', methods=['GET'])
def IrrigationLouis():
    con = sqlite3.connect(RaupoDB)
    IrrigationLouis = []
    cur = con.execute('SELECT * FROM SoilMoisture  WHERE block = "Louis" ')

    for row in cur:
        IrrigationLouis.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(IrrigationLouis)


@app.route('/GrowthLouis', methods=['GET'])
def growthLouis():
    con = sqlite3.connect(RaupoDB)
    growthLouis = []
    cur = con.execute('SELECT * FROM Growth  WHERE block = "Louis" ')

    for row in cur:
        growthLouis.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(growthLouis)






@app.route('/brokenPostsLouis', methods=['GET'])
def postsLouis():
    con = sqlite3.connect(RaupoDB)
    postsLouis = []
    cur = con.execute('SELECT * FROM BrokenPosts WHERE block = "Louis" ')

    for row in cur:
        postsLouis.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(postsLouis)





@app.route('/SprayLouis', methods=['GET'])
def sprayLouis():
    con = sqlite3.connect(RaupoDB)
    sprayLouis = []
    cur = con.execute('SELECT * FROM Spray WHERE block = "Louis" ')

    for row in cur:
        sprayLouis.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(sprayLouis)



@app.route('/DiseaseLouis', methods=['GET'])
def diseaseLouis():
    con = sqlite3.connect(RaupoDB)
    diseaseLouis = []
    cur = con.execute('SELECT * FROM Disease WHERE block = "Louis" ')

    for row in cur:
        diseaseLouis.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(diseaseLouis)











#Retrieving the data for SACHA




@app.route('/SoilMoistureSacha', methods=['GET'])
def SoilMoistureSacha():
    con = sqlite3.connect(RaupoDB)
    SoilMoistureSacha = []
    cur = con.execute('SELECT * FROM SoilMoisture WHERE block = "Sacha" ')

    for row in cur:
        SoilMoistureSacha.append(list(row))
    con.close()
    # return render_template('Lana.html', SoilMoisture=SoilMoisture)
    return jsonify(SoilMoistureSacha)
    # return render_template('Lana.html', SoilMoisture=SoilMoisture)


@app.route('/IrrigationSacha', methods=['GET'])
def IrrigationSacha():
    con = sqlite3.connect(RaupoDB)
    IrrigationSacha = []
    cur = con.execute('SELECT * FROM SoilMoisture  WHERE block = "Sacha" ')

    for row in cur:
        IrrigationSacha.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(IrrigationSacha)


@app.route('/GrowthSacha', methods=['GET'])
def growthSacha():
    con = sqlite3.connect(RaupoDB)
    growthSacha = []
    cur = con.execute('SELECT * FROM Growth  WHERE block = "Sacha" ')

    for row in cur:
        growthSacha.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(growthSacha)






@app.route('/brokenPostsSacha', methods=['GET'])
def postsSacha():
    con = sqlite3.connect(RaupoDB)
    postsSacha = []
    cur = con.execute('SELECT * FROM BrokenPosts WHERE block = "Sacha" ')

    for row in cur:
        postsSacha.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(postsSacha)





@app.route('/SpraySacha', methods=['GET'])
def spraySacha():
    con = sqlite3.connect(RaupoDB)
    spraySacha = []
    cur = con.execute('SELECT * FROM Spray WHERE block = "Sacha" ')

    for row in cur:
        spraySacha.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(spraySacha)



@app.route('/DiseaseSacha', methods=['GET'])
def diseaseSacha():
    con = sqlite3.connect(RaupoDB)
    diseaseSacha = []
    cur = con.execute('SELECT * FROM Disease WHERE block = "Sacha" ')

    for row in cur:
        diseaseSacha.append(list(row))
    con.close()
    # return render_template('Lana.html')
    return jsonify(diseaseSacha)










#Adding in HTML forms and Data



@app.route('/addSoilMoisture', methods=['POST'])
def add():
    details = {}

    for input in request.form:
        if input == 'day' or input == 'month' or input == 'year' or input == 'Vineyard' or input == 'block' or input == 'amount' or input == 'row' or input == 'bay' :
            details[input] = request.form[input]

    con = sqlite3.connect(RaupoDB)
    cur = con.execute(
        'INSERT INTO SoilMoisture(day, month, year, Vineyard, block, amount, row, bay) VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
        (details['day'], details['month'], details['year'], details['Vineyard'], details['block'], details['amount'], details['row'], details['bay'] )  )
    con.commit()
    con.close()

    return render_template('Lana.html', details=details)




@app.route('/addGrowth', methods=['POST'])
def addG():
    detailsG = {}

    for input in request.form:
        if input == 'dayG' or input == 'monthG' or input == 'yearG' or input == 'VineyardG' or input == 'blockG' or input == 'amountG' or input == 'rowG' or input == 'bayG' :
            detailsG[input] = request.form[input]

    con = sqlite3.connect(RaupoDB)
    cur = con.execute(
        'INSERT INTO Growth(day, month, year, Vineyard, block, amount, row, bay) VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
        (detailsG['dayG'], detailsG['monthG'], detailsG['yearG'], detailsG['VineyardG'], detailsG['blockG'], detailsG['amountG'], detailsG['rowG'], detailsG['bayG'] )  )
    con.commit()
    con.close()




    return render_template('Lana.html', detailsG=detailsG)



@app.route('/ADDd', methods=['POST'])
def addD():
    detailsD = {}

    for input in request.form:
        if input == 'dayD' or input == 'monthD' or input == 'yearD' or input == 'VineyardD' or input == 'blockD' or input == 'typeD' or input == 'amountD' or input == 'rowD' or input == 'bayD' :
            detailsD[input] = request.form[input]

    con = sqlite3.connect(RaupoDB)
    cur = con.execute(
        'INSERT INTO Disease(day, month, year, Vineyard, block, amount, type, row, bay) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)',
        (detailsD['dayD'], detailsD['monthD'], detailsD['yearD'], detailsD['VineyardD'], detailsD['blockD'], detailsD['typeD'], detailsD['amountD'], detailsD['rowD'], detailsD['bayD'] )  )
    con.commit()
    con.close()




    return render_template('Lana.html', detailsD=detailsD)




@app.route('/addS', methods=['POST'])
def addS():
    detailsS = {}

    for input in request.form:
        if input == 'dayS' or input == 'monthS' or input == 'yearS' or input == 'VineyardS' or input == 'blockS' or input == 'rowS' :
            detailsS[input] = request.form[input]

    con = sqlite3.connect(RaupoDB)
    cur = con.execute(
        'INSERT INTO Spray(day, month, year, Vineyard, block, row) VALUES(?, ?, ?, ?, ?, ?)',
        (detailsS['dayS'], detailsS['monthS'], detailsS['yearS'], detailsS['VineyardS'], detailsS['blockS'], detailsS['rowS'] )  )
    con.commit()
    con.close()




    return render_template('Lana.html', detailsS=detailsS)





@app.route('/addP', methods=['POST'])
def addP():
    detailsP = {}

    for input in request.form:
        if input == 'dateP' or input == 'VineyardP' or input == 'blockP' or input == 'rowP' or input == 'bayP' or input == 'brokenP' :
            detailsP[input] = request.form[input]

    con = sqlite3.connect(RaupoDB)
    cur = con.execute(
        'INSERT INTO BrokenPosts(date, Vineyard, block, row, bay, broken) VALUES(?, ?, ?, ?, ?, ?)',
        (detailsP['dateP'], detailsP['VineyardP'], detailsP['blockP'], detailsP['rowP'], detailsP['bayP'], detailsP['brokenP']  )  )
    con.commit()
    con.close()




    return render_template('Lana.html', detailsP=detailsP)
