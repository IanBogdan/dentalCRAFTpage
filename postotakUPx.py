lines = None
with open("styles.css", "r") as f:
    lines = f.read().split('\n')
    for i, line in enumerate(lines):
        if "%" in line:
            if "height" in line or "top" in line or "bottom" in line:
                l = line.split(" ")
                l[-1] =  str(float(l[-1][0:-2])/100.0 * 1080) + "px;"
                lines[i] = ' '.join(l)
                
            elif "width" in line or "left" in line or "right" in line:
                l = line.split(" ")
                l[-1] =  str(float(l[-1][0:-2])/100.0 * 1920) + "px;"
                lines[i] = ' '.join(l)

with open("styles2.css", "w") as f:
    f.write("\n".join(lines))