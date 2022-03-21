#include <Array.au3>
#include <AutoItConstants.au3>
#include <StringConstants.au3>

;~ _NOTE:
;~  ----------------------------------------------------------------------------
;~ Get Program by vendor name
;~ wmic product where "Vendor like '%Microsoft%'" get Name,Version

;~ Uninstall program by name
;~ wmic product where name="ESET Security" call uninstall /nointeractive
;~  ----------------------------------------------------------------------------

Func GetInstalledPrograms()

	Local $sQueryOutput = ""

	; wmic query
	Local $sWMICquery = 'wmic product get name'

	; run query hidden and with redirected I/O streams
	Local $hPid = Run($sWMICquery, '', @SW_HIDE, $STDERR_MERGED)
	Do
		Sleep(100)
		$sQueryOutput &= StdoutRead($hPid) ; get wmic output from redirected stream
	Until @error ; error occurs when command has finished

	$aQueryOutputLines = StringSplit($sQueryOutput, @CRLF)
	_ArrayDelete($aQueryOutputLines, 0) ; remove name element
	_ArrayDelete($aQueryOutputLines, 0) ; remove total element

	Local $aPrograms = []
	For $sProgram In $aQueryOutputLines
		If StringLen($sProgram) > 1 Then
			_ArrayAdd($aPrograms, StringStripWS($sProgram, $STR_STRIPLEADING + $STR_STRIPTRAILING + $STR_STRIPSPACES)) ; remove whitespaces from beginning and end
		EndIf
	Next
	_ArrayDelete($aPrograms, 0) ; remove blank element

	Return $aPrograms
EndFunc   ;==>GetInstalledPrograms

;~ Func UnistallProgram($sProgramName)
;~ EndFunc

;~ Func InstallProgram($sProgramPath)
;~ EndFunc


_ArrayDisplay(GetInstalledPrograms())
