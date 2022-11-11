from langdetect import detect
import translators as ts

#simple function to detect and translate text 
def detect_and_translate(text,target_lang,det):
    result_lang = detect(text)
    if result_lang == target_lang:
        return text
    elif result_lang!= target_lang and det=="Yes":
        translate_text = ts.google(text,to_language=target_lang)
        return translate_text, result_lang
    else :
        translate_text = ts.google(text,to_language=target_lang)
        return translate_text