function ExamAnswer() {
}
ExamAnswer.prototype.getExamAnswer = function(form) {
    var names = getNames(form);
    var value = getValue(names);
    var result = [];
    _.forEach(names,function(n,i) {
        result.push({name:n,value:value[i]});
    });
    return result;
}
var getNames = function(form) {
    var repeatNames = [];
    [].forEach.call(form,function(label) {
        if(label.name !== "") {
            repeatNames.push(label.name);
        }
    });
    noRepeatNames = _.chain(repeatNames).groupBy(function(label) {
        return label;
    }).map(function(label,index) {
        return index;
    }).value();
    return noRepeatNames;
}
var getValue = function(noRepeatNames) {
    var value = [];
    _.forEach(noRepeatNames,function(n) {
        value.push(getValueByType(document.getElementsByName(n)));
    });
    return value;
}
var getValueByType = function(labels) {
    var type = labels[0].type;
    if (type === "text") {
        return getTextValue(labels);
    } else if (type === "radio" || type === "checkbox") {
        return getRadioAndCheckboxValue(labels);
    } else if (type === "textarea") {
        return getTextareaValue(labels);
    }
}
var getTextValue = function(labels) {
    var result = [];
    _.forEach(labels, function(n) {
        result.push(n.value);
    });
    return result;
}
var getRadioAndCheckboxValue = function(labels) {
    var result = [];
    _.forEach(labels, function(n, i) {
        if (n.checked === true) {
            result.push(n.value);
        }
    });
    return result;
}
var getTextareaValue = function(labels) {
    var result = [];
    result.push(labels[0].value);
    return result;
}
