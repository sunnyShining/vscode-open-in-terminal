on run argv
	set prevDelimiter to AppleScript's text item delimiters
	set AppleScript's text item delimiters to " "
	set commands to argv as string
	set AppleScript's text item delimiters to prevDelimiter
	tell application "Terminal"
        if not (exists window 1) then reopen
        activate
        tell application "System Events"
			keystroke "t" using {command down}
		end tell
        set window_id to id of last window whose frontmost is true
        -- display dialog"my variable: " & window_id
        do script commands in window id window_id of application "Terminal"
    end tell
end run